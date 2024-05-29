document.write(`

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Reader</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        #menu {
            background-color: #f1f1f1;
            display: none;
            padding: 10px;
        }
        #menu input[type="text"] {
            width: 80%;
            padding: 5px;
            margin-bottom: 10px;
        }
        #menu label {
            display: block;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <div id="menu">
        <label for="urlInput">Sodium URL:</label>
        <input type="text" id="urlInput" value="https://sodium-5h8.pages.dev">
        <label for="useBeta">Use Beta:</label>
        <input type="checkbox" id="useBeta">
        <button id="saveButton">Save</button>
    </div>
    <button id="toggleMenu">▼</button>
    <iframe id="iframe" src="https://sodium-5h8.pages.dev" style="width: 100%; height: calc(100vh - 40px); border: none;"></iframe>

    <script>
        const toggleMenuButton = document.getElementById('toggleMenu');
        const menu = document.getElementById('menu');
        const urlInput = document.getElementById('urlInput');
        const useBetaCheckbox = document.getElementById('useBeta');
        const saveButton = document.getElementById('saveButton');
        const iframe = document.getElementById('iframe');

        toggleMenuButton.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        saveButton.addEventListener('click', () => {
            const url = urlInput.value;
            const useBeta = useBetaCheckbox.checked;
            
            if (useBeta) {
                urlInput.value = 'https://beta.sodium-5h8.pages.dev';
                iframe.src = 'https://beta.sodium-5h8.pages.dev';
            } else {
                iframe.src = url;
            }
        });
    </script>
</body>
</html>

`);