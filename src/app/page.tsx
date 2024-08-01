
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import Paragraph from "@/components/Paragraph/Paragraph";
import Tag from "@/components/Tag/Tag";

export default function Home() {
   
  return (
   <> 
       <Header tag='h1'> adsdasd</Header>
       <Header tag='h2'> adsdasd</Header> 
       <Header tag='h3'> adsdasd</Header> 
       <Button next='none'  act='main'>asdsa</Button>
       <Button next='right'  act='ghost'>asdsa</Button>      
       <Paragraph size='s' >adsdasd</Paragraph>
       <Paragraph size='m' >adsdasd</Paragraph> 
       <Paragraph size='l' >adsdasd</Paragraph>
       <Tag size='s' color='fiol'>adsd</Tag>
       <Tag size='m' color='ghost'>adsd</Tag> 
       <Tag size='m' color='gray'>adsd</Tag> 
       <Tag size='m' color='grean'>adsd</Tag>  
       <Tag size='m' color='red'>adsd</Tag> 
        </>   
  );
} 
