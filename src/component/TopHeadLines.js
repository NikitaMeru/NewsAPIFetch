import { Component } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { getTopHeadlines } from "../services/NewsApiServices";
import Card from 'react-bootstrap/Card';


export class TopHeadLines extends Component{
    constructor(){
        super();
        this.state={
            news:[]
        }
    }

     async componentDidMount(){
        const data=await getTopHeadlines();
        console.log(data.articles);
        this.setState({news:data.articles});
    }

    render(){
        return(
            <>
            <Container className="mt-4 text-center">
                <Alert >View Top Headlines</Alert>
            </Container>

            <Container className="mt-3">
                <Row>
                    {
                        this.state.news.map((item)=>{
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
}