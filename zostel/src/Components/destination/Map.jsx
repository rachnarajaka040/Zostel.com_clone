
function Map({name}) {

    console.log("map is of")
  return <div >

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9592.580580234355!2d75.32536409455439!3d19.872058432454224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb993409797eb5%3A0x48e0537ab0c6d9f8!2sZostel%20Aurangabad!5e0!3m2!1sen!2sin!4v1676183508630!5m2!1sen!2sin"
    width="1200"
    height="280"
    style={{ border: "0" }}
    allowfullscreen=""
    loading="lazy"
  ></iframe>
</div>
}

export default Map; 