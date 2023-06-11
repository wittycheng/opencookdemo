var folders = [
    'crampedroom_gptagent_blue_bcagent_green_play1',
    'crampedroom_gptagent_green_bcagent_blue_play1',
    'crampedroom_gptagent_blue_greedyagent_green_play1',
    'crampedroom_gptagent_green_greedyagent_blue_play1',
    'crampedroom_gptagent_blue_randomagent_green_play1',
    'crampedroom_gptagent_green_randomagent_blue_play1'
];
var currentFolderIndex = 0; // Current folder index
var currentIndex = 1;       // Current photo index
var slideshowInterval;      // Interval for the slideshow

function startSlideshow() {
    // Clear any existing interval
    stopSlideshow();

    // Set the interval to refresh the photo container at 6 fps
    slideshowInterval = setInterval(refreshPhoto, 1000 / 6);
}

function stopSlideshow() {
    // Clear the interval
    clearInterval(slideshowInterval);
}

function refreshPhoto() {
    // Update the current photo source
    var currentFolder = folders[currentFolderIndex];
    document.getElementById("currentPhoto").src = currentFolder + '/images/' + currentIndex + '.png';
    document.getElementById("photoDescription").textContent = currentFolder + '/descriptions/' + currentIndex + '.txt';
    // Increment the current index and loop back to the beginning if necessary
    currentIndex++;
    if (currentIndex > 400) {
        currentIndex = 1;
        clearInterval(slideshowInterval);
        return;
    }
}

function changeFolder() {
    // Get the selected folder index from the dropdown
    var folderSelect = document.getElementById("folder");
    currentFolderIndex = folderSelect.selectedIndex;
    currentIndex = 1; // Reset the current index when changing folders
    
    // Refresh the photo immediately when changing folders
    refreshPhoto();
    stopSlideshow(); // Stop the slideshow if it's currently running
}
