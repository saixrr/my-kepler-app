// src/KeplerMap.js
import React from 'react';
import { KeplerGl } from 'kepler.gl';
import { useDispatch } from 'react-redux';
import { addDataToMap } from 'kepler.gl/actions'; // Ensure this import is correct

const KeplerMap = () => {
  const dispatch = useDispatch();

  // Example data (replace this with your own data)
  const data = {
    fields: [
      { name: 'latitude', type: 'real' },
      { name: 'longitude', type: 'real' },
      { name: 'category', type: 'string' }
    ],
    rows: [
      [37.7749, -122.4194, 'Location A'],
      [34.0522, -118.2437, 'Location B']
    ]
  };

  // Adding data to the map when the component mounts
  React.useEffect(() => {
    dispatch(addDataToMap({
      datasets: {
        info: {
          label: 'My Data',
          id: 'my_data'
        },
        data: data
      },
      options: {
        centerMap: true,
        zoom: 10
      }
    }));
  }, [dispatch]);

  return (
    <KeplerGl
      id="map"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default KeplerMap;
