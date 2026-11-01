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

function infoPanelOpen() {
    document.getElementById('infoPanel').classList.add('open');
    // await wait(1000);
    // document.getElementById('infoPanel').addEventListener('slide-right', () => {
    // document.getElementById('infoPanel').remove('slide-left'); 
    // }, { once: true });
}


function infoPanelClose() {
    // document.getElementById('infoPanel').classList.add('slide-left');
    // await wait(1000);
    // document.getElementById('infoPanel').addEventListener('slide-left', () => {
    document.getElementById('infoPanel').classList.remove('open'); 
    // }, { once: true });
}

async function projectPanelInit() {
    // Read links and break them up into an array
    ass = await fetch("projects.txt");
    assText = await ass.text();
    assray = assText.split('\n');

    for(let i = 0; i < assray.length; i++) {
        tmp_img = document.createElement('img');
        tmp_img.id = assray[i];
        tmp_img.src = 'assets/img/mosquitto.png';
        tmp_img.className = 'pin triggered';

        document.getElementById('projects').appendChild(tmp_img);
    }
}