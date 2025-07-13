import os
import matplotlib.pyplot as plt
from IPython.core.display import display, HTML
from IPython import get_ipython

def save_and_display_plot(fig, filename):
    # Create 'images' directory if it doesn't exist
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # Save the figure
    filepath = os.path.join('images', filename)
    fig.savefig(filepath)
    plt.close(fig)  # Close the figure to free up memory
    
    # Display the image in the notebook
    display(HTML(f'<img src="{filepath}" alt="{filename}">'))
    
    # Insert a new Markdown cell below with the image reference
    insert_markdown_cell(filename)

def insert_markdown_cell(filename):
    shell = get_ipython()
    if shell is None:
        return  # Not running in IPython/Jupyter environment
    
    # Create the Markdown content
    markdown_content = f"![{filename}](images/{filename})"
    
    # Insert a new Markdown cell below the current one
    shell.set_next_input(f"{markdown_content}", replace=False)

# Patch matplotlib's show function
original_show = plt.show
def patched_show(*args, **kwargs):
    fig = plt.gcf()
    filename = f'plot_{len(plt.get_fignums())}.png'
    save_and_display_plot(fig, filename)
    return original_show(*args, **kwargs)

plt.show = patched_show

print("Jupytext image saver utility loaded. Images will be saved to the 'images' folder and displayed in a new Markdown cell below.")