import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Contact from "./Contact/Contact";
import AddContact from "./Contact/AddContact";

function ContactPage() {
  return (
    <>
      <Box flex={6} bgcolor="#ECF0EF">
        <Navbar />
        <Contact />
      </Box>
    </>
  );
}

export default ContactPage;