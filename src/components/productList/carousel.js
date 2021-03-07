import {UncontrolledCarousel} from "reactstrap";
import "./carousel.css";


const Carousel =(props)=>{
    const {main_img} = props.images;
    const {other_imgs} = props.images;
    console.log(other_imgs);
    let items ;
    if(other_imgs !== undefined){
     items = [
        {
          src: main_img,
          altText: '',
          caption: '',
          header: '',
          key: '1',
          
        },
        {
          src: other_imgs[0],
          altText: '',
          caption: '',
          header: '',
          key: '2'
        },
        {
          src: other_imgs[1],
          altText: '',
          caption: '',
          header: '',
          key: '3'
        },
        {
          src: other_imgs[2],
          altText: '',
          caption: '',
          header: '',
          key: '4'
        },
        {
          src: other_imgs[3],
          altText: '',
          caption: '',
          header: '',
          key: '5'
        }
      ];

    }
    else{
      items = [
        {
          src: 'https://a0.muscache.com/im/pictures/1b66fa00-cc31-4976-81dd-9a991a8b3697.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '1'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/1b66fa00-cc31-4976-81dd-9a991a8b3697.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '2'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/1b66fa00-cc31-4976-81dd-9a991a8b3697.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '3'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/1b66fa00-cc31-4976-81dd-9a991a8b3697.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '4'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/1b66fa00-cc31-4976-81dd-9a991a8b3697.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '5'
        }
      ]; 
    }
    return(
        <>
            <UncontrolledCarousel  items={items}  />
        </>
    );
}


export default Carousel;