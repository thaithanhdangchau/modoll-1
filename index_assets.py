import os
import json
import shutil

base_assets = '01. ASSETS CỦA MODOLL'
web_assets = 'assets/doll_parts'

if os.path.exists(web_assets):
    shutil.rmtree(web_assets)
os.makedirs(web_assets, exist_ok=True)

data = {
    'base': [],
    'face': {
        'EYEGLASS': [],
        'MẮT': [],
        'MÀY': [],
        'MIỆNG': [],
        'MŨI': [],
        'TÓC NAM': [],
        'TÓC NỮ': []
    },
    'outfit': {
        'NAM': [],
        'NỮ': []
    }
}

# 1. Base files
base_dir = os.path.join(base_assets, 'MODEL 2D BÚP BÊ')
if os.path.exists(base_dir):
    for f in os.listdir(base_dir):
        if f.endswith('.svg') or f.endswith('.png'):
            shutil.copy2(os.path.join(base_dir, f), os.path.join(web_assets, f))
            data['base'].append(f)

# 2. Face files
face_dir = os.path.join(base_assets, 'NGŨ QUAN')
for category in data['face'].keys():
    cat_dir = os.path.join(face_dir, category)
    if os.path.exists(cat_dir):
        os.makedirs(os.path.join(web_assets, category), exist_ok=True)
        for f in os.listdir(cat_dir):
            if f.endswith('.svg') or f.endswith('.png'):
                shutil.copy2(os.path.join(cat_dir, f), os.path.join(web_assets, category, f))
                data['face'][category].append(f)

# 3. Outfit files
outfit_dir = os.path.join(base_assets, 'TRANG PHỤC')
for category in data['outfit'].keys():
    cat_dir = os.path.join(outfit_dir, category)
    if os.path.exists(cat_dir):
        os.makedirs(os.path.join(web_assets, category), exist_ok=True)
        for f in os.listdir(cat_dir):
            if f.endswith('.svg') or f.endswith('.png'):
                shutil.copy2(os.path.join(cat_dir, f), os.path.join(web_assets, category, f))
                data['outfit'][category].append(f)

with open('assets/js/doll_assets.js', 'w', encoding='utf-8') as f:
    f.write('const DOLL_ASSETS = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')

print("Asset indexing completed!")
