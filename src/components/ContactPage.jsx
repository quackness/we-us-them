import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ContactPage(props) {
  // const {contact} = props;

  const { id } = useParams();
  const [ContactPage, setContactPage] = useState({});
  const [loaded, setLoaded] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost/wordpress/wp-json/wp/v2/contacts/${id}`)
      .then(function (res) {
        console.log("res", res);
        setContactPage(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!loaded) {
    return <>Loading...</>;
  }

  return (
    <>
      <div>
        <Link to="/">Go back</Link>
      </div>
      <div>
        {" "}
        This is a card of {ContactPage.acf.name}, their phone number is{" "}
        {ContactPage.acf.phone} and email address is {ContactPage.acf.email}.
      </div>
    </>
  );
}
