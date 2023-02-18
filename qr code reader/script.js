const input_file = document.getElementById("input_file");

input_file.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    const formData = new FormData();

    formData.append("file", file);

    fetchData(formData);
  }
});

async function fetchData(formData) {
  try {
    const res = await fetch("http://api.qrserver.com/v1/read-qr-code/", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    const result = data[0].symbol[0];

    if (!result.data) {
      console.log(`You have an error => ${result.error}`);
      return 0;
    }

    console.log(`Content your QR CODE is: ${result.data}`);
  } catch (error) {
    console.error(error);
  }
}
