/*
 Unified mode:
  - send bus/device/aquarium.door/lock/set
  - subscribe bus/device/aquarium.door/lock/state
*/

module.exports = $ => [

  {
    id: 'aquarium.door',
    name: 'Aquarium door',
    capabilities: [
      {
        id: 'lock',
        type: Boolean,
        read: {
          topic: 'modbus/endpointpp/state/aquarium_door_lock',
          decoder: $.translators.PyBool2Num,
        },
        set: {
          topic: 'modbus/endpointpp/set/aquarium_door_lock',
          encoder: $.translators.Num2PyBool,
        },
      },
      {
        id: 'open',
        type: Boolean,
        read: {
          topic: 'modbus/endpointpp/state/aquarium_door_opened',
          decoder: $.translators.PyBool2Num,
        },
        set: null,
      },
    ],
  },

];
