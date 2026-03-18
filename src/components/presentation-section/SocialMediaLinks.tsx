import { Box, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "./SocialMediaLinks.css";

export default function SocialMediaLinks() {
  return (
    <Box display="flex" gap={2}>
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/nicholas-nieminen-jönsson/"
        target="_blank"
        className="linkButtons"
      >
        <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/Clemond"
        target="_blank"
        className="linkButtons"
      >
        <GitHubIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <IconButton
        component="a"
        href="mailto:Nicholas.nieminenjonsson@gmail.com"
        className="linkButtons"
      >
        <EmailIcon fontSize="large" sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}
