import { useState } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook

const SeatSelector = () => {
  const router = useRouter(); // Initialize the useRouter hook

  const totalRows = 10;
  const seatsPerRow = 10;
  const totalSeats = totalRows * seatsPerRow;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    const updatedSeats = [...selectedSeats];

    if (updatedSeats.includes(seatNumber)) {
      // If seat is already selected, remove it
      const index = updatedSeats.indexOf(seatNumber);
      updatedSeats.splice(index, 1);
    } else {
      // If seat is not selected, add it
      updatedSeats.push(seatNumber);
    }

    setSelectedSeats(updatedSeats);
  };

  const handleBookClick = () => {
    // Handle booking logic here
    // You can use the selectedSeats array for the selected seats
    console.log("Booked Seats:", selectedSeats);
    router.push('/nft');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 gap-y-2">
        {[...Array(totalRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center items-center">
            {[...Array(seatsPerRow)].map((_, seatIndex) => {
              const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
              const isSelected = selectedSeats.includes(seatNumber);

              return (
                <div
                  key={seatIndex}
                  onClick={() => handleSeatClick(seatNumber)}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start">
        <button className="cancel-button" onClick={() => setSelectedSeats([])}>
          Cancel
        </button>
      </div>
      <button onClick={handleBookClick} className="book-button">
        Book
      </button>
      <style jsx>{`
        .seat {
          width: 30px;
          height: 30px;
          background-color: #001B6A;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2px;
          cursor: pointer;
        }

        .selected {
          background-color: #FFE453;
        }

        .book-button {
          position: fixed;
          margin-top: 570px;
          margin-left: 434px;
          padding: 14px;
          background-color: #FFDE7C;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .cancel-button {
          position: fixed;
          margin-right: 50px;
          left: 500px; /* Adjust the left position as needed */
          bottom: 65px; /* Adjust the bottom position as needed */
          padding: 14px;
          padding-right: 20px;
          background-color: #FFDE7C;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default SeatSelector;
