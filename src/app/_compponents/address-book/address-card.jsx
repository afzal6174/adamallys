const AddressCard = ({ name, location, contactDetails, email }) => {
  return (
    <div className="w-40 h-auto">
      <h4 className="text-primary text-lg text-bold my-4 leading-4">{name}</h4>
      <div className="text-muted text-sm flex flex-col gap-4">
        <div className="leading-4">
          Location:
          <p>{location}</p>
        </div>
        <div className="leading-4">
          Contact Details: <p>Tel: {contactDetails.tel}</p>{" "}
          <p>Fax: {contactDetails.fax}</p>
        </div>
        <div className="leading-4">
          Email:
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
