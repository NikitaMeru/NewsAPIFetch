import { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Form, Row } from "react-bootstrap";
// import { Form } from "react-router-dom";
import { getAllNews } from "../services/NewsApiServices";

export function AllNews(){
    const [news,setNews] = useState([]);
    const [topic,setTopic]=useState('');

    async function getNews(topic){
        const data = await getAllNews(topic);
        // console.log(data);
         setNews(data.articles);
    }

    const handleChange = (event) => {
        setTopic(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        getNews(topic);
    }
    useEffect(() => {
            getNews('indian politics');
        
    },[]);
    return(
        <>
        <Container className="mt-4 text-center">
            <Alert>View All News</Alert>
        </Container>

        <Container className="mt-4 mb-5">
            <Row>
                <Col lg={6}>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Topic</Form.Label>
                <Form.Control type="text" placeholder="Enter Topic" name='topic' onChange={handleChange} />
            </Form.Group>
            </Form>
            <input type={'submit'} value='Fetch News' className="btn btn-success btn-sm"></input>
            </Col>
            </Row>
          </Container>
       
            <Container className="mt-3">
            <Row>
                {
                    news.map((item)=>{
                        return(
                            <Col lg={6}>
                                 <Card>
                                        <Card.Img variant="top" src={item.urlToImage}/>
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                            {item.description}
                                            </Card.Text>
                                            
                                            </Card.Body>
                                        </Card>
                            </Col>
                        )
                    })
                }
            </Row>

        </Container>
        </>
    );
}