import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={property.image} style={{ width: "100%" }} />
      <h3>{property.title}</h3>
      <p>${property.price}</p>
      <p>{property.location}</p>

      <Link href={`/property/${property.id}`}>Ver más</Link>
    </div>
  );
}
