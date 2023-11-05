// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY --> Do not Repeat Yourself
const Services = () => {
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    // const [min, setMin] = useState(undefined);
    // const [max, setMax] = useState(undefined);
    const services = useServices(asc, search);
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch(`https://car-doctor-server-topaz-one.vercel.app/services?sort=${asc? 'asc' : 'des'}&search=${search}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    const handleSearch = e =>{
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
    }

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                <form onSubmit={handleSearch}>
                    <input type="text" name="search" id="" />
                    <input type="submit" value="Search" className="btn"/>
                </form>
                <button
                    className="btn btn-secondary"
                    onClick={() => setAsc(!asc)}
                >
                    {asc ? 'Price: High to Low' : 'Price: Low To High'}
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;