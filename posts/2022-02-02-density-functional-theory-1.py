# ---
# tags: ["quantum-chemistry", "density-functional-theory", "computational-physics", "python"]
# classes: wide
# title: "Building a 1D Density Functional Theory Code in Python"
# date: 2024-10-06
#
# jupyter:
#   jupytext:
#     formats: py:percent,md
#     text_representation:
#       extension: .py
#       format_name: percent
#       format_version: '1.3'
#       jupytext_version: 1.16.4
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# %% [markdown]
# ## Introduction to 1D Density Functional Theory
#
# Density Functional Theory (DFT) is a powerful computational method used in quantum chemistry and solid-state physics to investigate the electronic structure of many-body systems. While real-world applications of DFT often deal with three-dimensional systems, exploring DFT in one dimension provides an excellent starting point for understanding the fundamental concepts and implementation details.
#
# In this blog post, we'll walk through the process of building a 1D DFT code using Python. We'll focus on a simple system - a particle in a box - to illustrate the key components of DFT calculations.
#
# ## Theoretical Background
#
# Before diving into the code, let's briefly review the theoretical foundations of DFT in the context of a 1D system.
#
# The core idea of DFT is that the ground state properties of a many-electron system can be determined using the electron density $n(x)$, rather than the many-body wavefunction. This is based on the Hohenberg-Kohn theorems, which state that:
#
# 1. The external potential, and hence the total energy, is a unique functional of the electron density.
# 2. The ground state energy can be obtained variationally: the density that minimizes the total energy is the exact ground state density.
#
# In the Kohn-Sham formulation of DFT, we map the interacting system onto a fictitious system of non-interacting particles that generate the same density. The Kohn-Sham equations for a 1D system are:
#
# $$
# \left[-\frac{1}{2}\frac{d^2}{dx^2} + v_{eff}(x)\right]\phi_i(x) = \epsilon_i\phi_i(x)
# $$
#
# where $\phi_i(x)$ are the Kohn-Sham orbitals, $\epsilon_i$ are their energies, and $v_{eff}(x)$ is the effective potential:
#
# $$
# v_{eff}(x) = v_{ext}(x) + v_H(x) + v_{xc}(x)
# $$
#
# Here, $v_{ext}(x)$ is the external potential, $v_H(x)$ is the Hartree potential, and $v_{xc}(x)$ is the exchange-correlation potential.
#
# ## Implementation Overview
#
# Our 1D DFT code will consist of several key components:
#
# 1. Basis set definition
# 2. Hamiltonian construction
# 3. Density calculation
# 4. Potential calculation
# 5. Self-consistent field (SCF) loop
#
# We'll implement these components step by step, explaining the purpose and functionality of each part.
#
# ## Setting Up the Environment
#
# First, let's import the necessary Python libraries:

# %%
# %run jupyter_image_saver.py

# %%
import numpy as np
from scipy import linalg
import matplotlib.pyplot as plt


# %% [markdown]
# ## Basis Set Definition
#
# For our 1D DFT code, we'll use a simple basis set of sine functions, which are eigenfunctions of the particle in a box:
#
# $$
# \chi_n(x) = \sqrt{\frac{2}{L}} \sin\left(\frac{n\pi x}{L}\right)
# $$
#
# where $L$ is the box length and $n$ is the basis function index.
#
# The Kohn-Sham orbital $\phi_i$ is expressed as 
#
# $$
# \phi_i(x) = \sum_n c_{in}\chi_n(x)
# $$
#
# Let's implement this basis set:

# %%
def basis_function(x: np.ndarray, n: int, L: float) -> np.ndarray:
    """
    Compute the nth basis function for a particle in a box.

    Args:
        x (np.ndarray): Spatial grid points.
        n (int): Basis function index (quantum number).
        L (float): Length of the box.

    Returns:
        np.ndarray: Values of the nth basis function at the given grid points.
    """
    return np.sqrt(2/L) * np.sin(n * np.pi * x / L)

def create_basis_set(x: np.ndarray, num_basis_functions: int, L: float) -> np.ndarray:
    """
    Create a set of basis functions for a particle in a box.

    Args:
        x (np.ndarray): Spatial grid points.
        num_basis_functions (int): Number of basis functions to generate.
        L (float): Length of the box.

    Returns:
        np.ndarray: 2D array where each column is a basis function evaluated at the grid points.
    """
    basis_set = np.zeros((len(x), num_basis_functions))
    for n in range(1, num_basis_functions + 1):
        basis_set[:, n-1] = basis_function(x, n, L)
    return basis_set


# %% [markdown]
# ## Hamiltonian Construction
#
# The next step is to construct the Hamiltonian matrix. In the basis of sine functions, the kinetic energy term is diagonal:
#
# $$
# T_{mn} = -\frac{1}{2}\int_0^L \chi_m(x)\frac{d^2}{dx^2} \chi_n(x)dx = \frac{n^2\pi^2}{2L^2}\delta_{mn}
# $$
#
# The potential energy term needs to be integrated numerically:
#
# $$
# V_{mn} = \int_0^L \chi_m(x) v_{eff}(x) \chi_n(x) dx
# $$
#
# Let's implement the Hamiltonian construction:

# %%
def kinetic_energy_matrix(num_basis_functions: int, L: float) -> np.ndarray:
    """
    Construct the kinetic energy matrix for a particle in a box.

    Args:
        num_basis_functions (int): Number of basis functions.
        L (float): Length of the box.

    Returns:
        np.ndarray: Kinetic energy matrix.
    """
    T = np.zeros((num_basis_functions, num_basis_functions))
    for n in range(1, num_basis_functions + 1):
        T[n-1, n-1] = (n**2 * np.pi**2) / (2 * L**2)
    return T

def potential_energy_matrix(basis_set: np.ndarray, v_eff: np.ndarray, x: np.ndarray) -> np.ndarray:
    """
    Construct the potential energy matrix.

    Args:
        basis_set (np.ndarray): Set of basis functions evaluated at grid points.
        v_eff (np.ndarray): Effective potential at grid points.
        x (np.ndarray): Spatial grid points.

    Returns:
        np.ndarray: Potential energy matrix.
    """
    V = np.zeros((basis_set.shape[1], basis_set.shape[1]))
    for m in range(basis_set.shape[1]):
        for n in range(basis_set.shape[1]):
            V[m, n] = np.trapz(basis_set[:, m] * v_eff * basis_set[:, n], x)
    return V

def construct_hamiltonian(T: np.ndarray, V: np.ndarray) -> np.ndarray:
    """
    Construct the Hamiltonian matrix.

    Args:
        T (np.ndarray): Kinetic energy matrix.
        V (np.ndarray): Potential energy matrix.

    Returns:
        np.ndarray: Hamiltonian matrix.
    """
    return T + V


# %% [markdown]
# ## Density Calculation
#
# The electron density is a crucial quantity in DFT. For our 1D system, we can calculate it as:
#
# $$
# n(x) = \sum_i |\phi_i(x)|^2
# $$
#
# where $\phi_i(x)$ are the Kohn-Sham orbitals. In our basis set representation, we can express this as:
#
# $$
# n(x) = \sum_i \left|\sum_n c_{in} \chi_n(x)\right|^2
# $$
#
# where $c_{in}$ are the expansion coefficients of the Kohn-Sham orbitals in our basis.
#
# Let's implement the density calculation:

# %%
def calculate_density(coefficients: np.ndarray, basis_set: np.ndarray, num_electrons: int) -> np.ndarray:
    """
    Calculate the electron density.

    Args:
        coefficients (np.ndarray): Expansion coefficients of the Kohn-Sham orbitals.
        basis_set (np.ndarray): Set of basis functions evaluated at grid points.
        num_electrons (int): Number of electrons in the system.

    Returns:
        np.ndarray: Electron density at grid points.
    """
    occupied_orbitals = coefficients[:, :num_electrons]
    density = np.sum(np.abs(basis_set @ occupied_orbitals)**2, axis=1)
    return density


# %% [markdown]
# ## Potential Calculation
#
# The effective potential in DFT consists of three terms: the external potential, the Hartree potential, and the exchange-correlation potential. For our 1D system, we'll use a simple external potential (e.g., a harmonic oscillator potential) and a local density approximation (LDA) for the exchange-correlation potential.

# %%
def external_potential(x: np.ndarray, k: float = 1) -> np.ndarray:
    """
    Calculate the external potential (harmonic oscillator).

    Args:
        x (np.ndarray): Spatial grid points.
        k (float, optional): Spring constant. Defaults to 1.

    Returns:
        np.ndarray: External potential at grid points.
    """
    return 0.5 * k * x**2

def hartree_potential(density: np.ndarray, x: np.ndarray) -> np.ndarray:
    """
    Calculate the Hartree potential by solving Poisson's equation.

    Args:
        density (np.ndarray): Electron density at grid points.
        x (np.ndarray): Spatial grid points.

    Returns:
        np.ndarray: Hartree potential at grid points.
    """
    v_H = np.zeros_like(density)
    for i in range(len(x)):
        v_H[i] = -4 * np.pi * np.trapz(np.abs(x[i] - x) * density, x)
    return v_H

def exchange_correlation_potential_lda(density: np.ndarray) -> np.ndarray:
    """
    Calculate the exchange-correlation potential using Local Density Approximation (LDA).

    Args:
        density (np.ndarray): Electron density at grid points.

    Returns:
        np.ndarray: Exchange-correlation potential at grid points.
    """
    return -((3/np.pi) * density)**(1/3)

def calculate_effective_potential(density: np.ndarray, x: np.ndarray) -> np.ndarray:
    """
    Calculate the effective potential for the Kohn-Sham equations.

    Args:
        density (np.ndarray): Electron density at grid points.
        x (np.ndarray): Spatial grid points.

    Returns:
        np.ndarray: Effective potential at grid points.
    """
    v_ext = external_potential(x)
    v_H = hartree_potential(density, x)
    v_xc = exchange_correlation_potential_lda(density)
    return v_ext + v_H + v_xc


# %% [markdown]
# ## Self-Consistent Field Loop
#
# The heart of the DFT calculation is the self-consistent field (SCF) loop. We start with an initial guess for the density, calculate the effective potential, solve the Kohn-Sham equations, and then calculate a new density. We repeat this process until the density (or energy) converges.
#
# Here's the implementation of the SCF loop:

# %%
def scf_loop(x: np.ndarray, num_electrons: int, num_basis_functions: int, 
             max_iterations: int = 100, mixing_param: float = 0.5, 
             convergence_threshold: float = 1e-6) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    """
    Perform the self-consistent field loop for DFT calculations.

    Args:
        x (np.ndarray): Spatial grid points.
        num_electrons (int): Number of electrons in the system.
        num_basis_functions (int): Number of basis functions to use.
        max_iterations (int, optional): Maximum number of SCF iterations. Defaults to 100.
        mixing_param (float, optional): Mixing parameter for density update. Defaults to 0.5.
        convergence_threshold (float, optional): Convergence threshold for density. Defaults to 1e-6.

    Returns:
        tuple[np.ndarray, np.ndarray, np.ndarray]: Final density, eigenvalues, and eigenvectors.
    """
    L = x[-1] - x[0]
    basis_set = create_basis_set(x, num_basis_functions, L)
    T = kinetic_energy_matrix(num_basis_functions, L)
    
    # Initial guess for density
    density = np.ones_like(x) * num_electrons / L
    
    for iteration in range(max_iterations):
        v_eff = calculate_effective_potential(density, x)
        V = potential_energy_matrix(basis_set, v_eff, x)
        H = construct_hamiltonian(T, V)
        
        # Solve the eigenvalue problem
        eigenvalues, eigenvectors = linalg.eigh(H)
        
        # Calculate new density
        new_density = calculate_density(eigenvectors, basis_set, num_electrons)
        
        # Check for convergence
        if np.max(np.abs(new_density - density)) < convergence_threshold:
            print(f"Converged after {iteration + 1} iterations")
            break
        
        # Mix old and new densities
        density = mixing_param * new_density + (1 - mixing_param) * density
    
    return density, eigenvalues, eigenvectors


# %% [markdown]
# ## Putting It All Together
#
# Now that we have all the components, let's create a function to run the entire DFT calculation:

# %%
def run_dft_calculation(num_points: int = 1000, num_electrons: int = 2, 
                        num_basis_functions: int = 10) -> tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray]:
    """
    Run a complete 1D DFT calculation.

    Args:
        num_points (int, optional): Number of spatial grid points. Defaults to 1000.
        num_electrons (int, optional): Number of electrons in the system. Defaults to 2.
        num_basis_functions (int, optional): Number of basis functions to use. Defaults to 10.

    Returns:
        tuple[np.ndarray, np.ndarray, np.ndarray, np.ndarray, np.ndarray]: 
            Spatial grid, final density, effective potential, eigenvalues, and eigenvectors.
    """
    x = np.linspace(-5, 5, num_points)
    density, eigenvalues, eigenvectors = scf_loop(x, num_electrons, num_basis_functions)
    
    # Calculate final effective potential
    v_eff = calculate_effective_potential(density, x)
    
    return x, density, v_eff, eigenvalues, eigenvectors

# Run the calculation
x, density, v_eff, eigenvalues, eigenvectors = run_dft_calculation()


# %% [markdown]
# ## Visualization
#
# Finally, let's visualize our results:

# %%
def visualize_results(x: np.ndarray, density: np.ndarray, v_eff: np.ndarray, 
                      eigenvectors: np.ndarray, num_basis_functions: int):
    """
    Visualize the results of the DFT calculation.

    Args:
        x (np.ndarray): Spatial grid points.
        density (np.ndarray): Electron density at grid points.
        v_eff (np.ndarray): Effective potential at grid points.
        eigenvectors (np.ndarray): Eigenvectors (Kohn-Sham orbitals).
        num_basis_functions (int): Number of basis functions used.
    """
    plt.figure(figsize=(12, 8))

    plt.subplot(2, 1, 1)
    plt.plot(x, density, label='Electron density')
    plt.plot(x, v_eff, label='Effective potential')
    plt.legend()
    plt.title('1D DFT Results')
    plt.ylabel('Density / Potential')

    plt.subplot(2, 1, 2)
    basis_set = create_basis_set(x, num_basis_functions, x[-1] - x[0])
    
    for i in range(3):  # Plot first 3 orbitals
        orbital = np.sum(eigenvectors[:, i][None, :] * basis_set, axis=1)
        plt.plot(x, orbital, label=f'Orbital {i+1}')
    plt.legend()
    plt.xlabel('Position')
    plt.ylabel('Orbital amplitude')

    plt.tight_layout()
    plt.show()

# Visualize the results
# visualize_results(x, density, v_eff, eigenvectors, num_basis_functions=10)


# %% [markdown]
# This visualization function creates a figure with two subplots:
# 1. The first subplot shows the electron density and the effective potential.
# 2. The second subplot displays the first three Kohn-Sham orbitals.
# 3. 
# ## Modeling H₂ with 1D DFT
#
# While our 1D DFT code is a simplification, we can adapt it to model a simple diatomic molecule like H₂. Here's how we could approach this:
#
# ### Adapting the External Potential
#
# Instead of a harmonic oscillator potential, we need to represent two protons at fixed positions. In 1D, we can model this as:

# %%
def external_potential_H2(x: np.ndarray, R: float) -> np.ndarray:
    """
    External potential for H₂ molecule in 1D.
    
    Args:
        x (np.ndarray): Spatial grid points.
        R (float): Distance between nuclei.
    
    Returns:
        np.ndarray: External potential at each grid point.
    """
    center = (x[-1] + x[0]) / 2
    a = 1e-5  # to avoid numeric issues
    v_ext = -1 / np.sqrt((x - (center - R/2))**2 + a) - 1 / np.sqrt((x - (center + R/2))**2 + a)
    return v_ext


# %% [markdown]
# Here, `R` is the distance between the nuclei, and `a` is a small positive number to avoid division by zero. The potential is centered in our box.
#
# ### Adjusting the Number of Electrons
#
# H₂ has two electrons, so we set `num_electrons = 2` in our `run_dft_calculation` function.
#
# ### Calculating the Total Energy
#
# To find the equilibrium bond length, we need to calculate the total energy, including the nuclear repulsion:

# %%
def calculate_total_energy(density: np.ndarray, v_ext: np.ndarray, v_eff: np.ndarray, 
                           eigenvalues: np.ndarray, x: np.ndarray, R: float) -> float:
    """
    Calculate the total energy of the H₂ system.
    
    Args:
        density (np.ndarray): Electron density.
        v_ext (np.ndarray): External potential.
        v_eff (np.ndarray): Effective potential.
        eigenvalues (np.ndarray): Kohn-Sham orbital energies.
        x (np.ndarray): Spatial grid points.
        R (float): Distance between nuclei.
    
    Returns:
        float: Total energy of the system.
    """
    # Kinetic energy
    T_s = np.sum(eigenvalues[:2])  # Sum of occupied orbital energies
    
    # Electron-nuclear attraction
    E_en = np.trapz(density * v_ext, x)
    
    # Hartree energy
    E_H = 0.5 * np.trapz(density * (v_eff - v_ext - exchange_correlation_potential_lda(density)), x)
    
    # Exchange-correlation energy
    E_xc = np.trapz(density * exchange_correlation_potential_lda(density), x)
    
    # Nuclear repulsion
    E_nn = 1 / R
    
    return T_s + E_en + E_H + E_xc + E_nn


# %% [markdown]
# ### Finding the Equilibrium Bond Length
#
# We can find the equilibrium bond length by running our DFT calculation for different R values and finding the minimum energy:

# %%
def find_equilibrium_bond_length(x: np.ndarray, num_basis_functions: int) -> float:
    """
    Find the equilibrium bond length for H₂.
    
    Args:
        x (np.ndarray): Spatial grid points.
        num_basis_functions (int): Number of basis functions to use.
    
    Returns:
        float: Equilibrium bond length.
    """
    R_values = np.linspace(0.5, 2.5, 20)  # in atomic units
    energies = []
    
    for R in R_values:
        v_ext = external_potential_H2(x, R)
        density, eigenvalues, eigenvectors = scf_loop(x, 2, num_basis_functions, v_ext=v_ext)
        v_eff = calculate_effective_potential(density, x)
        energy = calculate_total_energy(density, v_ext, v_eff, eigenvalues, x, R)
        energies.append(energy)
    
    equilibrium_R = R_values[np.argmin(energies)]
    return equilibrium_R


# %% [markdown]
# ### Running the Calculation
#
# Finally, we can run our calculation:

# %%
x = np.linspace(-10, 10, 1000)
num_basis_functions = 20
equilibrium_R = find_equilibrium_bond_length(x, num_basis_functions)
print(f"Equilibrium bond length: {equilibrium_R:.3f} atomic units")

# Run DFT at equilibrium bond length
v_ext = external_potential_H2(x, equilibrium_R)
density, eigenvalues, eigenvectors = scf_loop(x, 2, num_basis_functions, v_ext=v_ext)
v_eff = calculate_effective_potential(density, x)
energy = calculate_total_energy(density, v_ext, v_eff, eigenvalues, x, equilibrium_R)
print(f"Total energy at equilibrium: {energy:.6f} atomic units")

# Visualize results
visualize_results(x, density, v_eff, eigenvectors, num_basis_functions)

# %% [markdown]
# ### Conclusion
#
# In this blog post, we've implemented a basic 1D Density Functional Theory code in Python. We've covered the key components of DFT, including:
#
# 1. Basis set definition using particle-in-a-box eigenfunctions
# 2. Hamiltonian construction with kinetic and potential energy terms
# 3. Density calculation from Kohn-Sham orbitals
# 4. Effective potential calculation, including external, Hartree, and exchange-correlation potentials
# 5. Self-consistent field loop for iterative solution of the Kohn-Sham equations
# 6. Visualization of results
#
# This implementation serves as a starting point for understanding DFT calculations. In real-world applications, more sophisticated basis sets, exchange-correlation functionals, and numerical techniques would be used to handle more complex systems and achieve better accuracy and efficiency.
#
# Some potential improvements and extensions to this code could include:
#
# 1. Implementing more advanced exchange-correlation functionals (e.g., GGA)
# 2. Adding support for different external potentials
# 3. Improving the efficiency of the SCF loop (e.g., using DIIS convergence acceleration)
# 4. Calculating and visualizing additional properties (e.g., total energy, HOMO-LUMO gap)
# 5. Extending the code to handle multiple non-interacting particles
#
# By working through this implementation, you've gained insight into the fundamental principles of DFT and how they can be translated into code. This knowledge forms a solid foundation for understanding more complex DFT implementations and their applications in computational chemistry and materials science.
#
# ## Further Reading
#
# To deepen your understanding of DFT and its applications, you might want to explore the following resources:
#
# 1. "Density Functional Theory: A Practical Introduction" by David Sholl and Janice A. Steckel
# 2. "Electronic Structure: Basic Theory and Practical Methods" by Richard M. Martin
# 3. "A Bird's-Eye View of Density-Functional Theory" by Kieron Burke and Lucas O. Wagner (https://arxiv.org/abs/1308.5164)
# 4. The Psi4NumPy project, which includes educational implementations of various quantum chemistry methods: https://github.com/psi4/psi4numpy
#
# In the next blog post, we'll extend this code to handle 2D systems, introducing new challenges and opportunities for visualization and analysis of quantum systems.
