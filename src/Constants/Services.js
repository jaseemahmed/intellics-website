import cloudServices from "../assets/images/cloud.jpg";
import networking from "../assets/images/networking.jpg";
import security from "../assets/images/security.jpg";
import infra from "../assets/images/infras.jpg";
import code from "../assets/images/code.jpg";
import itsales from "../assets/images/itsales.jpg";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CableIcon from '@mui/icons-material/Cable';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
export const services = [
  {
    image: cloudServices,
    icon: <CloudQueueIcon />,
    title: "CLOUD SOLUTIONS",
    content:
      "Revolutionize your business with our cloud solutions. Seamlessly scale your operations, enhance collaboration, and ensure data security with our cutting-edge cloud services. Experience the agility and flexibility needed to thrive in today's dynamic digital landscape, all backed by our commitment to excellence.",
  },
  {
    image: networking,
    icon: <CableIcon />,
    title: "NETWORKING & CABLING SOLUTIONS",
    content:
      "From robust infrastructure design to efficient cable management, we tailor solutions that ensure seamless communication and high-performance networking. Experience reliability and speed with our expertly crafted solutions designed to meet the demands of your evolving business environment.",
  },
  {
    image: security,
    icon: <GppGoodOutlinedIcon />,
    title: "SECURITY SOLUTIONS",
    content:
      "Protect your digital assets with our Security Solutions. We offer comprehensive and cutting-edge security measures to safeguard your data, networks, and operations. From threat detection to risk mitigation, our solutions ensure a secure digital environment, allowing you to focus on your core business with confidence.",
  },
  {
    image: infra,
    icon: <SettingsInputAntennaIcon />,
    title: "INFRASTRUCTURE SOLUTIONS",
    content:
      "Optimize your operations with our Infrastructure Solutions. We specialize in designing and implementing robust infrastructure tailored to your business needs. From scalable architecture to efficient management, our solutions ensure a solid foundation for seamless performance, growth, and adaptability in today's ever-evolving technological landscape.",
  },
  {
    image: code,
    icon: <CodeIcon />,
    title: "WEBSITE & SOFTWARE SOLUTIONS",
    content:
      "We craft user-centric websites and develop tailored software applications that align with your business goals. From intuitive interfaces to scalable backend systems, our solutions are designed to enhance your online presence and streamline operations, ensuring a competitive edge in the digital realm.",
  },
  {
    image: itsales,
    icon: <ComputerIcon />,
    title: "IT SALES & SERVICES",
    content:
      "From hardware and software sales to tailored IT services, our dedicated team ensures seamless integration and optimal performance. Whether you're looking for reliable IT products or expert services to enhance your technology infrastructure, We elevate your business to new heights.",
  },
];
