const inputUrl = document.getElementById("video_url"),
  image = document.getElementById("thumbnail"),
  wrapper = document.querySelector(".wrapper");

inputUrl.addEventListener("keyup", createThumbnail);

function createThumbnail(e) {
  console.log(e.target.value);
  const inputvalue = e.target.value;

  if (inputvalue.includes("youtube.com/watch?v=")) {
    //one
    const videoId = findId(inputvalue, "v=");

    const imageURL = generateURL(videoId);
    // set image fn()
    setImage(imageURL);
  } else if (inputvalue.includes("youtu.be/")) {
    //two
    const videoId = findId(inputvalue, "be/");

    const imageURL = generateURL(videoId);

    // set image fn()
    setImage(imageURL);
  } else {
    image.src = "";
    wrapper.classList.remove("active");
    alert("Invalid format URL...");
  }
}

function generateURL(video_id) {
  return `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
}

function findId(inp, sep) {
  return inp.split(sep)[1].slice(0, 11);
}

function setImage(url) {
  image.addEventListener("load", () => {
    wrapper.classList.add("active");
  });
  image.src = url;
}
