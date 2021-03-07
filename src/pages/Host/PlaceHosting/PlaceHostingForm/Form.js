import React, { useEffect } from "react";
import "./Form.css";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useSelector } from "react-redux";
import {axiosInstance} from "../../../../axiosInstance"

export default function HostingForm(props){
    const places = Object.values(useSelector(state => state.Places))

    const[formData,setFormData]=React.useState({
        place_type: {
            apartment: false,
            house: false,
            villa: false,
            bed_and_breakfast: false
        },
        space_allowed: {
            entire_place: false,
            private_room: false,
            shared_room: false
        },
        num_guests: 0,
        total_bedrooms: 0,
        total_bathrooms: 0,
        num_beds: 0,
        title: "",
        summary: "",
        address: {
            country: "",
            city: "",
            street_address: "",
            "postal/zip": "",
            coordinates: [114.17158, 22.30469]
        },
        amenities: {
            essential: {
                essentials: false,
                desk_workspace: false,
                iron: false,
                hair_dryer: false,
                shampoo: false,
                closet_drawers: false,
                tv: false,
                heat: false,
                wifi: false,
                breakfast_coffee_tea: false,
                air_conditioning: false,
                fireplace: false
            },
            safety: {
                smoke_detector: false,
                first_aid_kit: false,
                fire_extinguisher: false,
                lock_on_bedroom_door: false
            },
            facilities: {
                kitchen: false,
                pool: false,
                parking: false,
                gym: false,
                laundry: false,
                hot_tub: false
            }
        },
        images: {
            main_img: "https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320",
            other_imgs: ["https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320", "https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320","https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320","https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320"]
        },
        price_per_night: "",
        cancellation_option: false
    })

    useEffect(()=>{
        if (props.match.params.id) {
            let place = places.filter((ele)=>ele._id==props.match.params.id)
            setFormData(place[0])
        }
    },[])

    const handleFormData=(e,type,subType)=>{
        if (type) {
            if (type=="address") {
                setFormData({
                    ...formData,
                    [type]:{
                        ...formData[type],
                        [e.target.name]:e.target.value,
                    }
                })
            }else if (subType) {
                if (type=="place_type"||type=="space_allowed") {
                    setFormData({
                        ...formData,
                        [type]:subType()
                    })
            }else{
                    setFormData({
                        ...formData,
                        [type]:{
                            ...formData[type],
                            [subType]:{
                                ...formData[type][subType],
                                [e.target.name]:!formData[type][subType][e.target.name]
                            }
                        }
                    })
                }   
            }
        }else{
            setFormData({
                ...formData,
                [e.target.name]:e.target.value
            })
        }
    }

    const addPlace=()=>{
        axiosInstance.post("hosting/hostPlace",formData)
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))
    }

    const editPlace = ()=>{
        axiosInstance.put(`places/edit/${props.match.params.id}`,formData)
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))
    }

    return(
        <div id="formPage">
                <h3 className="title">Hi, User! <br/>Let’s get started listing your space.</h3>
            <div className="formCard container shadow-lg">
             <Form>
             <FormGroup>
                    <Label for="title">Place title</Label>
                    <Input value={formData.title} type="text" name="title" onChange={(e)=>handleFormData(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="summary">Place description</Label>
                    <Input value={formData.summary} type="textarea" name="summary" placeholder="Describe your place" onChange={(e)=>handleFormData(e)}/>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="street_address">Address</Label>
                        <Input value={formData.address.street_address} type="text" name="street_address" placeholder="ex: 10 tahrir st" onChange={(e)=>handleFormData(e,"address")} />
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input value={formData.address.city} type="text" name="city" onChange={(e)=>handleFormData(e,"address")}/>
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input value={formData.address.country} type="text" name="country" onChange={(e)=>handleFormData(e,"address")}/>
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="postal/zip">Postal code</Label>
                        <Input value={formData.address["postal/zip"]} type="text" name="postal/zip" onChange={(e)=>handleFormData(e,"address")} />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={3}>
                    <FormGroup>
                        <Label for="num_guests">Geusts number</Label>
                        <Input value={formData.num_guests} type="text" name="num_guests" placeholder="Allowed geusts number" onChange={(e)=>handleFormData(e)} />
                    </FormGroup>
                    </Col>
                    <Col md={3}>
                    <FormGroup>
                        <Label for="total_bedrooms">Bedrooms number</Label>
                        <Input type="number" name="total_bedrooms" value={formData.total_bedrooms} onChange={(e)=>handleFormData(e)}/>
                    </FormGroup>
                    </Col>
                    <Col md={3}>
                    <FormGroup>
                        <Label for="total_bathrooms">Bathrooms number</Label>
                        <Input type="number" name="total_bathrooms" value={formData.total_bathrooms} onChange={(e)=>handleFormData(e)}/>
                    </FormGroup>
                    </Col>
                    <Col md={3}>
                    <FormGroup>
                        <Label for="num_beds">Beds number</Label>
                        <Input type="number" name="num_beds" value={formData.num_beds} onChange={(e)=>handleFormData(e)}/>
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
              <Col md={6}>
              <FormGroup tag="fieldset" onChange={(e)=>handleFormData(e,"place_type",()=>{
                  let keys = ["apartment","house","villa","bed_and_breakfast"]
                  keys=keys.filter((ele)=>ele!=e.target.id)
                  return{
                      [e.target.id]:e.target.value,
                      [keys[0]]:false,
                      [keys[1]]:false,
                      [keys[2]]:false
                  }
              })}>
                <Label>Place type</Label>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.place_type.apartment} value={true} type="radio" name="placeType" id="apartment"/>{' '}
                        Apartment
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.place_type.house} value={true} type="radio" name="placeType" id="house"/>{' '}
                        House
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.place_type.villa} value={true} type="radio" name="placeType" id="villa" />{' '}
                        Villa
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.place_type.bed_and_breakfast} value={true} type="radio" name="placeType" id="bed_and_breakfast" />{' '}
                        Bed and breakfast
                </Label>
                </FormGroup>
            </FormGroup>
              </Col>
            <Col md={6}>
            <FormGroup tag="fieldset" onChange={(e)=>handleFormData(e,"space_allowed",()=>{
                  let keys = ["entire_place","private_room","shared_room"]
                  keys=keys.filter((ele)=>ele!=e.target.id)
                  return{
                      [e.target.id]:e.target.value,
                      [keys[0]]:false,
                      [keys[1]]:false,
                  }
              })}>
                <Label>Space type</Label>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.space_allowed.entire_place} value={true} type="radio" name="spaceType" id="entire_place" />{' '}
                        Entire place
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.space_allowed.private_room} value={true} type="radio" name="spaceType" id="private_room" />{' '}
                        Private room
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input checked={formData.space_allowed.shared_room} value={true} type="radio" name="spaceType" id="shared_room" />{' '}
                        Shared room
                </Label>
                </FormGroup>
            </FormGroup>
            </Col>
                </Row>
                <br/>
                <Label>Amenities</Label>
            <Row>
                <Col md={5}>
                    <Label><b>Essential</b></Label>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.essentials} name="essentials" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Essentials
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.desk_workspace} name="desk_workspace" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Desk workspace
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.iron} name="iron" onChange={(e)=>handleFormData(e,"amenities","essential")}  type="checkbox"/>{' '}
                            Iron
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.hair_dryer} name="hair_dryer" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Hair dryer
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.shampoo} name="shampoo" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Shampoo
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.closet_drawers} name="closet_drawers" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Closet drawers
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.tv} name="tv" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            TV
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.heat} name="heat" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Heater
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.wifi} name="wifi" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            WiFi
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.breakfast_coffee_tea} name="breakfast_coffee_tea" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Breakfast, Coffee, Tea
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.air_conditioning} name="air_conditioning" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Air conditioning
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.essential.fireplace} name="fireplace" onChange={(e)=>handleFormData(e,"amenities","essential")} type="checkbox"/>{' '}
                            Fireplace
                        </Label>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <Label><b>Safety</b></Label>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.safety.smoke_detector} name="smoke_detector" onChange={(e)=>handleFormData(e,"amenities","safety")} type="checkbox"/>{' '}
                            Smoke detector
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.safety.first_aid_kit} name="first_aid_kit" onChange={(e)=>handleFormData(e,"amenities","safety")} type="checkbox"/>{' '}
                            First aid kit
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.safety.fire_extinguisher} name="fire_extinguisher" onChange={(e)=>handleFormData(e,"amenities","safety")} type="checkbox"/>{' '}
                            Fire extinguisher
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.safety.lock_on_bedroom_door} name="lock_on_bedroom_door" onChange={(e)=>handleFormData(e,"amenities","safety")} type="checkbox"/>{' '}
                            Lock on bedroom door
                        </Label>
                    </FormGroup>

                    <Label><b>Facilities</b></Label>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.facilities.kitchen} name="kitchen" onChange={(e)=>handleFormData(e,"amenities","facilities")} type="checkbox"/>{' '}
                            Kitchen
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.facilities.pool} name="pool" onChange={(e)=>handleFormData(e,"amenities","facilities")} type="checkbox"/>{' '}
                            Pool
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.facilities.parking} name="parking" onChange={(e)=>handleFormData(e,"amenities","facilities")} type="checkbox"/>{' '}
                            Parking
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.facilities.gym} name="gym" onChange={(e)=>handleFormData(e,"amenities","facilities")} type="checkbox"/>{' '}
                            GYM
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.facilities.laundry} name="laundry" onChange={(e)=>handleFormData(e,"amenities","facilities")} type="checkbox"/>{' '}
                            Laundry
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input checked={formData.amenities.facilities.hot_tub} name="hot_tub" onChange={(e)=>handleFormData(e,"amenities","facilities")} type="checkbox"/>{' '}
                            Hot tub
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
              <br/>
            <FormGroup row>
                <Label for="imgs" sm={2}>Place images</Label>
                <Col sm={10}>
                <Input type="file" name="imgs" multiple="multiple"/>
                <FormText color="muted">
                    Please upload 5 photos for your place
                </FormText>
                </Col>
            </FormGroup>
            <Row>
                <Col md={5}>
                    <FormGroup>
                        <Label for="price_per_night">Price/Night ($)</Label>
                        <Input className="price" type="text" name="price_per_night" value={formData.price_per_night} onChange={(e)=>handleFormData(e)}/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup check>
                <Label check>
                <Input checked={formData.cancellation_option} name="cancellation_option" value={formData.cancellation_option} 
                onChange={()=>{
                        setFormData({
                            ...formData,
                            cancellation_option:!formData.cancellation_option
                        })
                }} type="checkbox"/>{' '}
                    User can cancel the reservation
                </Label>
            </FormGroup>
            <br/>
            {
                props.match.params.id?
                <Button onClick={editPlace}>Edit your place</Button>:
                <Button onClick={addPlace}>Host your place</Button>
            }
            </Form>
        </div>
        </div>
    )
}