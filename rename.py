import os

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements
    content = content.replace('AuraVoyage', 'SafarYatri')
    content = content.replace('auravoyage', 'safaryatri')
    
    # Navbar and Footer specific separated spans
    content = content.replace('>Aura</span>', '>Safar</span>')
    content = content.replace('>Voyage</span>', '>Yatri</span>')
    content = content.replace('Aura<span', 'Safar<span')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

src_dir = '/Users/sumitthakur/Desktop/Travel site/src'
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js') or file.endswith('.css'):
            replace_in_file(os.path.join(root, file))

print("Brand name successfully updated to SafarYatri across all files.")
