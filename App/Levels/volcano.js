const VOLCANO = {
  name: 'Volcano',
  nick: 'VOLCANO',
  colors: Colors.biomes.volcano,
  runAsCutscene: true,
  axesEnabled: false,
  radius: 2,
  x: -20,
  y: 0,
  camera: {
    x: 2,
    offset: [0, 0.4],
    fov: 30,
  },
  requirements: ['TIME_COOL'],
  defaultExpression: '\\frac{40}{1+\\left(\\frac{x-200}{80}\\right)^6}-\\frac{60}{1+\\left(\\frac{x-200}{30}\\right)^6}+\\frac{90}{1+e^{-\\frac{\\left(-x+60\\right)}{10}}}+\\left(\\frac{x-200}{60}\\right)^2',
  directors: [
    {
      type: 'tracking',
      smoothing: 0.08,
      minFov: 8,
      minFovMargin: 7,
      transitions: [{
        domain: [135, 250],
        properties: {
          minFov: 50,
          offset: [0, -0.3]
        }
      }]
    }
  ],
  goals: [],
  sky: {
    asset: 'images.volcano_background_tall',
    margin: 1
  },
  bubble: {
    sky: {
      asset: 'images.western_slopes_background',
      margin: 1
    }
  },
  walkers: [
     {
      //  x: 191,
       x: -5,
      //  x: -34.5,
       asset: 'images.sam_float',
       name: 'WALKER_1',
       transition: {
         name: 'SLEDDER_1',
         toggleRunning: true,
         xRequirements: [0]
       },
      //  range: [-34, 1],
       transitionX: 0,
       speech: [{
         speakerX: 0,
         color: '#808080',
         content: 'Look, the finish line!',
         direction: 'up-left',
         deactivationThreshold: -33,
         domain: [-34, -33],
         distance: 1.5,
         repeatable: false,
       },
       {
        speakerX: 0,
        color: '#808080',
        content: 'Just past that volcano!!',
        direction: 'up-up-left',
        domain: [-33, -32],
        distance: 1.5,
      },{
        speakerX: 0,
         color: '#808080',
         content: 'Shoot! That means they\'re ahead of us!',
         direction: 'up-up-left',
         domain: [-29, -28],
         distance: 1.5,
       },{
        speakerX: 0,
         color: '#808080',
         content: 'I guess it\'s really over then.',
         direction: 'up-up-left',
         activationThreshold: -18,
         domain: [-27, -26],
         distance: 1.5,
       },{
        speakerX: 0,
        color: '#808080',
        content: 'May as well take our time now',
        direction: 'up-up-left',
        activationThreshold: -17,
        domain: [-26, -25],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'Stop stalling! Tell me your stupid idea already.',
        direction: 'up-up-left',
        activationThreshold: -20,
        domain: [-20, -19],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'Over it??',
        direction: 'up-up-left',
        activationThreshold: -20,
        domain: [15, -14],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'That sounds dangerous',
        direction: 'up-up-left',
        domain: [-11, -10],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: '...let\'s go',
        direction: 'up-up-left',
        domain: [-7, -6],
        distance: 1.5,
      },
      // AFTER VOLCANO SEQUENCE
      
      {
        speakerX: 0,
        color: '#808080',
        content: 'THAT. WAS. AWESOME.',
        direction: 'up-up-left',
        domain: [400, 405],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'oh my god I can\'t believe we made it.',
        direction: 'up-up-left',
        domain: [408, 409],
        distance: 1.5,
      },
      {
        speakerX: 0,
        color: '#808080',
        content: 'Well I\'m sorry for your stomach.',
        direction: 'up-up-left',
        domain: [414, 415],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'And I\'m sorry I doubted you.',
        direction: 'up-up-left',
        domain: [415, 416],
        distance: 1.5,
      },
      {
        speakerX: 0,
        color: '#808080',
        content: 'Oh yeah you\'re right',
        direction: 'up-up-left',
        domain: [422, 423],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'That\'s cool',
        direction: 'up-up-left',
        domain: [423, 424],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'I am! It\'s so weird we\'re finally finished...',
        direction: 'up-up-left',
        domain: [429, 430],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'Can we go back to that canyon now?',
        direction: 'up-up-left',
        domain: [434, 435],
        distance: 1.5,
      },{
        speakerX: 0,
        color: '#808080',
        content: 'Yeah, that one.',
        direction: 'up-up-left',
        domain: [440, 441],
        distance: 1.5,
      },
    ],
       walkers: 
         {
         x: -33,
         asset: 'images.benny_float',
         transition: {
          name: 'SLEDDER_1',
          xRequirements: [-33, -34.5],
          runningAfterTransition: true,
         },
        //  range: [-33, 0],
         transitionX: 0,
         speech: [{
          speakerX: 0,
          content: 'Oh that must be where the little people are going.',
          color: '#808080',
          direction: 'up-left',
          deactivationThreshold: '-23',
          domain: [-31, -30],
          distance: 1.5,
          repeatable: false,
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'I have a crazy idea',
          direction: 'up-up-left',
          domain: [-24, -23,],
          distance: 1.5,
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'So utterly, indubitably insane it just might...',
          direction: 'up-up-left',
          domain: [-22, -21],
          distance: [1.5],
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'We don\'t go around the volcano.',
          direction: 'up-up-left',
          domain: [-18, -17],
          distance: [1.5],
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'We go over it.',
          direction: 'up-up-left',
          domain: [-17, -16],
          distance: [1.5],
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'We jump it.',
          direction: 'up-up-left',
          domain: [-13, -12],
          distance: [1.5],
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'You want to win, right?',
          direction: 'up-up-left',
          domain: [-9, -8],
          distance: [1.5],
         },
         {
          speakerX: 0,
          color: '#808080',
          content: 'Follow me, m\'lady!',
          direction: 'up-up-left',
          domain: [-5, 0],
          distance: [1.5],
         },
         // AFTER VOLCANO SEQUENCE

        {
          speakerX: 0,
          color: '#808080',
          content: 'Really? I found it vaguely traumatizing...',
          direction: 'up-up-left',
          domain: [407,408],
          distance: [1.5]
        },
        {
          speakerX: 0,
          color: '#808080',
          content: 'I think I left my stomach back there...',
          direction: 'up-up-left',
          domain: [411, 412],
          distance: [1.5],
        },
        {
          speakerX: 0,
          color: '#808080',
          content: '*burp*',
          direction: 'up-up-left',
          domain: [418, 419],
          distance: [1.5]
        },
        {
          speakerX: 0,
          color: '#808080',
          content: 'So wait, does this mean we won?',
          direction: 'up-up-left',
          domain: [419, 420],
          distance: [1.5],
        },
        {
          speakerX: 0,
          color: '#808080',
          content: 'I feel like you should be more excited',
          direction: 'up-up-left',
          domain: [426, 427],
          distance: [1.5],
        },
        {
          speakerX: 0,
          color: '#808080',
          content: 'Well personally I\'m relieved.',
          direction: 'up-up-left',
          domain: [431, 432],
          distance: [1.5],
        },
        {
          speakerX: 0,
          color: '#808080',
          content: 'The one you didn\'t want to see?',
          direction: 'up-up-left',
          domain: [437, 438],
          distance: [1.5],
        },
        {
          speakerX: 0,
          color: '#808080',
          content: 'This time we\'ll do it together.',
          direction: 'up-up-left',
          domain: [443, 444],
          distance: [1.5],
        },
      ]
       },
     }
    ],
    lava: {
      x: 155,
      y: 60,
      size: 90,
    },
  sprites: [
    {
      asset: 'images.rock_1',
      flipX: true,
      drawOrder: LAYERS.level,
      size: 3,
      x: 0,
      offset: [0, 0.6],
      anchored: true
    },
    {
      asset: 'images.goalpost_left',
      drawOrder: LAYERS.backSprites,
      size: 8,
      x: 393.8,
      offset: [0, 0.25],
      anchored: true
    },
    {
      asset: 'images.goalpost_right',
      drawOrder: LAYERS.foreSprites,
      size: 6,
      x: 393,
      offset: [0, 0.6],
      anchored: true
    },
  ],
  sledders: [
    {
      name: 'SLEDDER_1',
      active: false,
      transition: {
        name: 'WALKER_1',
        // toggleRunning: true,
        xRequirements: [400],
      },
      x: 0,
       speech: [{
         speakerX: -25,
         content: 'Follow me, m\'lady!',
         direction: 'up-up-right',
         domain: [NINF, 0],
         distance: 1.8,
       }]
    }
  ],
  sounds: [
    {
      asset: 'sounds.music.volcano.start',
      loop: true,
      volume: 0.4,
      domain: [-50, -3, -5, -3],
    },
    {
      asset: 'sounds.music.volcano.jump',
      loop: true,
      volume: 0.4,
      domain: [3, 10, 200, 240],
      track: 'sledders'
    },
    // {
    //   asset: 'sounds.music.volcano.middle_buildup',
    //   loop: true,
    //   volume: 0.4,
    //   domain: [-3, 10, 100, 140],
    //   track: 'sledders'
    // },
    // {
    //   asset: 'sounds.music.volcano.jump',
    //   volume: 0.4,
    //   domain: [120, 150],
    //   track: 'sledders'
    // },
    {
      asset: 'sounds.music.volcano.middle_guitar',
      volume: 0.4,
      domain: [240, 320],
      track: 'sledders'
    },
  ],
}