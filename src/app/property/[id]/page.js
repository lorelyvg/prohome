"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const ref = doc(db, "properties", id);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProperty(snap.data());
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{property.title}</h1>
      <img src={property.image} style={{ width: "400px" }} />
      <p>${property.price}</p>
      <p>{property.location}</p>
      <p>{property.description}</p>
    </div>
  );
}
