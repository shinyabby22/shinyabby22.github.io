// Array containing paths to the four videos in the "videos" folder
const videoPaths = [
  "videos/video01.mp4",
  "videos/video02.mp4",
  "videos/video03.mp4",
  "videos/video04.mp4"
];

// Array to store the last playback position of each video
let videoPositions = [0, 0, 0, 0];

// Reference to the video element in HTML
const videoPlayer = document.getElementById("videoPlayer");

// Track which video is currently playing
let currentVideoIndex = 0;

// Flag to check if the current video is the first clip (for muting)
let isFirstClip = true;

/**
 * Loads a video by index, sets its playback position,
 * and resumes playback.
 * @param {number} videoIndex - The index of the video to load.
 */
function loadVideo(videoIndex) {
  // Set the video source to the path specified by the index
  videoPlayer.src = videoPaths[videoIndex];

  // Set the current time to the saved position for this video
  videoPlayer.currentTime = videoPositions[videoIndex];

  // Unmute the video if it is no longer the first clip
  videoPlayer.muted = isFirstClip;
  
  // Play the video
  videoPlayer.play();
}

/**
 * Toggles to a randomly selected video. Saves the current
 * video’s playback position, then loads and plays a randomly
 * chosen video from the list.
 */
function toggleRandomVideo() {
  // Save the current playback position for the current video
  videoPositions[currentVideoIndex] = videoPlayer.currentTime;

  // Select a random video index that is not the same as the current video
  let newVideoIndex;
  do {
    newVideoIndex = Math.floor(Math.random() * videoPaths.length);
  } while (newVideoIndex === currentVideoIndex);

  // Update the current video index
  currentVideoIndex = newVideoIndex;

  // Set `isFirstClip` to false after the first video change
  isFirstClip = false;

  // Load and play the new randomly selected video
  loadVideo(currentVideoIndex);
}

// Initial load of the first video on page load
loadVideo(currentVideoIndex);
