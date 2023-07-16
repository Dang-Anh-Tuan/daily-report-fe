/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppin: ['Poppins', 'sans-serif']
    },

    extend: {
      colors: {
        // Primary
        '#FEBF63': '#FEBF63',
        '#FEBF63.5': 'rgba(254, 191, 99, 0.5)',
        '#FF9F1C': '#FF9F1C',

        // Red
        '#A21600': '#A21600',
        '#C51B00': '#C51B00', // Vivi red
        '#FF4444': '#FF4444', // danger
        '#FF4444.2': 'rgba(255,68,68, 0.2)', // danger
        '#00C851': '#00C851', //success
        '#00C851.8': 'rgba(0,200,81,0.8)', //success
        '#FC1817': '#FC1817',
        '#FF4B2E': '#FF4B2E',
        '#FF7862': '#FF7862',
        '#FFA597': '#FFA597',
        '#FFD2CB': '#FFD2CB',
        // Gray
        '#2B2D30': '#2B2D30', // Deep Carbon
        '#474B50': '#474B50',
        '#81868E': '#81868E',
        '#A0A4AA': '#A0A4AA',
        '#C0C2C6': '#C0C2C6',
        '#F3F3F3': '#F3F3F3',
        '#999999': '#999999',
        '#DFDFDF': '#DFDFDF',
        EEEEEEE: 'EEEEEEE',

        '#FFFFFF': '#FFFFFF',

        '#242424': '#242424',
        '#424242': '#424242',
        '#616161': '#616161',
        '#BAC2CC': '#BAC2CC',
        '#C7C7C7': '#C7C7C7',
        '#C8CFD7': '#C8CFD7',
        '#E0E0E0': '#E0E0E0',
        '#EDEDED': '#EDEDED',
        '#F5F5F5': '#F5F5F5',
        // Yellow
        '#BB8531': '#BB8531',
        '#D0A85C': '#D0A85C',
        '#F4E2A8': '#F4E2A8',
        '#FAF6F1': '#FAF6F1',
        '#E4CEAD': '#E4CEAD',
        '#EFE8DE': '#EFE8DE',
        '#F9F4ED': '#F9F4ED',
        // Green
        '#00FF0A': '#00FF0A', // success
        '#ADE498': '#ADE498',
        '#ADE498.5': 'rgba(173, 228, 152, 0.5)',
        '#52B988': '#52B988',

        //Blue
        '#7FDBDA': '#7FDBDA',
        '#7FDBDA.5': 'rgba(127, 219, 218, 0.5)',
        '#3F8CFE': 'rgb(63,140,254)',
        '#3F8CFE.2': 'rgb(63,140,254, 0.2)',
        '#2684FF': '#2684FF',

        // toast
        '#E6EEFA': '#E6EEFA',
        '#E6F3EF': '#E6F3EF',
        '#FFFAE6': '#FFFAE6',
        '#FCEBE7': '#FCEBE7',
        '#E8EAEC': '#E8EAEC',

        '#0052CC': '#0052CC',
        '#00875A': '#00875A',
        '#FFC400': '#FFC400',
        '#DE350B': '#DE350B'
      },
      boxShadow: {
        1: '0px 1.1966px 29.915px rgba(69, 42, 124, 0.1)',
        2: '0px 0.15px 0.45px rgba(0, 0, 0, 0.11), 0px 0.8px 1.8px rgba(0, 0, 0, 0.13)',
        4: '0px 0.3px 0.9px rgba(0, 0, 0, 0.07), 0px 1.6px 3.6px rgba(0, 0, 0, 0.11)',
        8: '0px 0.6px 1.8px rgba(0, 0, 0, 0.11), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
        16: '0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
        32: '0px 2.4px 7.4px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)',
        64: '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)'
      },
      fontSize: {
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px', // text-12 = text-xs
        14: '14px', // text-14 = text-sm
        16: '16px', // text-16 = text-base
        18: '18px', // text-18 = text-lg
        20: '20px', // text-20 = text-xl
        22: '22px',
        24: '24px', // text-24 = text-2xl
        26: '26px',
        28: '28px',
        30: '30px', // text-30 = text-3xl
        32: '32px',
        34: '34px',
        36: '36px', // text-36 = text-4xl
        38: '38px',
        40: '40px',
        42: '42px',
        44: '44px',
        46: '46px',
        48: '48px', // text-48 = text-5xl
        60: '60px', // text-60 = text-6xl
        72: '72px', // text-72 = text-7xl
        96: '96px' // text-96 = text-8xl
      },
      lineHeight: {
        14: '14px',
        16: '16px', // leading-16 = leading-4
        18: '18px',
        20: '20px', // leading-20 = leading-5
        22: '22px',
        24: '24px', // leading-24 = leading-6
        26: '26px',
        28: '28px', // leading-28 = leading-7
        30: '30px',
        32: '32px', // leading-32 = leading-8
        34: '34px',
        36: '36px', // leading-32 = leading-9
        38: '38px',
        40: '40px', // leading-32 = leading-10
        42: '42px',
        44: '44px',
        46: '46px',
        48: '48px',
        56: '56px'
      },
      letterSpacing: {
        '010': '0.1px', // tracking-010
        '015': '0.15px', // tracking-015
        '020': '0.2px'
      },
      spacing: {
        '3px': '3px', // for example: pt-3px = pading top 3px
        '5px': '5px',
        '7px': '7px',
        '9px': '9px',
        '11px': '11px',
        '13px': '13px',
        '15px': '15px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px'
      },
      borderRadius: {
        4: '4px',
        8: '8px',
        10: '10px', // rounded-10
        20: '20px',
        40: '40px' // rounded-40
      }
    }
  },
  plugins: []
}
