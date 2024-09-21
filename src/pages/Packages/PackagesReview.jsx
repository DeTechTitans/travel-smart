import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import StarRating from '../Feedback/StarRating';

const PackageReviews = () => {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        { id: 1, title: 'Sydney, Australia', subtitle: 'Beautiful coastal city', imgSrc: 'images/Sydney.avif' },
        { id: 2, title: 'Kyoto, Japan', subtitle: 'Historic temples and shrines', imgSrc: 'images/Kyoto.avif' },
        { id: 3, title: 'Dubai, UAE', subtitle: 'Luxury shopping and nightlife', imgSrc: 'images/dubai.avif' },
       
    ];

    return (
        <div className="container py-5 overflow-hidden" id='Travel Packages'>
            <h2 className="text-center mb-2 display-5 fw-bold lead">Top Travel Packages</h2>
            <p className="divider border-black" />
            <p className=' dividers border-black'></p>
            <Row className=' py-5'>
                {items.map(item => (
                    <Col lg={4} md={6} sm={12} className="mb-4" key={item.id}>
                        <motion.div
                            layoutId={item.id} 
                            onClick={() => setSelectedId(item.id)} 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }} 
                        >
                            <Card>
                                <Card.Img variant="top" src={item.imgSrc} alt={item.title} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.subtitle}</Card.Text>
                                    <Button variant="outline-warning">Check out</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>

            
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="fixed-top d-flex justify-content-center align-items-center"
                        style={{ background: 'rgba(0,0,0,0.8)', height: '100vh' }}
                    >
                        <motion.div className="card" style={{ width: '600px', zIndex: 1000 }}>
                            <motion.img
                                src={items.find(item => item.id === selectedId).imgSrc}
                                alt={items.find(item => item.id === selectedId).title}
                                className="card-img-top"
                            />

                            <motion.div className="card-body">
                                <div className=''>
                                    <StarRating />
                                </div>
                                <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
                                <motion.p>{items.find(item => item.id === selectedId).subtitle}</motion.p>
                                <motion.button className="btn btn-outline-warning " onClick={() => setSelectedId(null)}>
                                    Close
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PackageReviews;
