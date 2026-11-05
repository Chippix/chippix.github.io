/**
 * Hides a container and its operating buttons optionally
 * 
 * @param {string} closedContainerId Container to close
 * @param {string} closeButtonId Optional button to hide
 * @param {string} openButtonId Optional button to display
 * 
 */
function closeContainer(closedContainerId, closeButtonId, openButtonId, className) {
    document.getElementById(closedContainerId).style.display = "none";
    if (closeButtonId != null && closeButtonId!='') {
        document.getElementById(closeButtonId).style.display = "none";
    }
    if (openButtonId != null && openButtonId!='') {
        document.getElementById(openButtonId).style.display = "block";
    }
}

/**
 * Shows a container and its operating buttons optionally
 * 
 * @param {string} openedContainerId Container to close
 * @param {string} closeButtonId Optional button to hide
 * @param {string} openButtonId Optional button to display
 * 
 */
function openContainer(openedContainerId, closeButtonId, openButtonId) {
    document.getElementById(openedContainerId).style.display = "block";
    if (closeButtonId != null && closeButtonId!='') {
        document.getElementById(closeButtonId).style.display = "block";
    }
    if (openButtonId != null && openButtonId!='') {
        document.getElementById(openButtonId).style.display = "none";
    }
}

async function infoTabOpen(projectId) {
    // 1. Grab files
    imgPath = 'assets/img/projects/'+projectId+'/'+projectId+'.png';
    txtPath = 'assets/img/projects/'+projectId+'/'+projectId+'.txt';
    txtA = await fetch(txtPath);
    txt = await txtA.text();

    // 2. Bash information into infoTab
    document.getElementById('infoTab').querySelector('img').src = imgPath;
    document.getElementById('infoTab').querySelector('h1').textContent = projectId;    
    document.getElementById('infoTab').querySelector('p').textContent = txt;

    // 3. Display
    document.getElementById('infoTab').classList.add('open');
}


function infoTabClose() {
    document.getElementById('infoTab').classList.remove('open'); 
}

async function projectPanelInit() {
    // Read links and break them up into an array
    minTop = 10;
    maxTop = 80;
    minLeft = 10;
    maxLeft = 70;
    zMin = 1;
    zMax = 9;

    ass = await fetch("projects.txt");
    assText = await ass.text();
    assray = assText.split('\n');

    for(let i = 0; i < assray.length; i++) {
        // Create image element
        img = document.createElement('img');
        img.id = assray[i];
        img.src = 'assets/img/projects/'+assray[i]+'/'+assray[i]+'.png';
        img.onclick = () => infoTabOpen(assray[i]); // onclick attribute doesnt show up in html markup

        // Create containing div element
        div = document.createElement('div');
        div.className = 'pin triggered';

        // Create div containing div
        divdiv = document.createElement('div');
        divdiv.style.position = 'absolute';
        divdiv.style.scale = 0.33;
        divdiv.style.transformOrigin = 'top left';
        divdiv.style.top = Math.floor((Math.random() * (maxTop-minTop) + minTop)).toString()+'%';
        divdiv.style.left = Math.floor((Math.random() * (maxLeft-minLeft) + minLeft)).toString()+'%';
        divdiv.style.z_index = Math.floor((Math.random() * (zMax-zMin) + zMin));

        // Store img in div
        div.appendChild(img);

        // Store div in div
        divdiv.appendChild(div);
        
        // Store div in the current projects section
        document.getElementById('projects').appendChild(divdiv);
    }
}