import {
	trigger,
	transition,
	style,
	query,
	group,
	animateChild,
	animate,
	keyframes
} from '@angular/animations';

//basic one
export const fader = trigger('routeAnimations', [
		transition('* <=> *', [
			query(':enter, :leave', [
				style({
					position: 'absolute',
					left: 0,
					width: '100%',
					opacity: 0,
					transform: 'scale(0) translateY(100%)'
				})
				]),
			query(':enter', [
				animate('600ms ease',
					style({
						opacity: 1,
						transform: 'scale(1) translateY(0)'
					})
					)
				])
			]),
		]);


//positioned
// export const slider = trigger('routeAnimations', [
// 		transition('* => alaIzquierda', slideTo('left')),
// 		transition('* => alaDerecha', slideTo('right')),
// 		transition('alaDerecha => *', slideTo('left')),
// 		transition('alaIzquierda => *', slideTo('right')),
// 	]);


//  function slideTo(direction){
// 	const optional = { optional: true };
// 	return [
// 	query(':enter, :leave', [
// 		style({
// 			position: 'absolute',
// 			top: 0,
// 			[direction]: 0,
// 			width: '100%'
// 		}, optional),
// 		query(':enter', [
// 			style({
// 				[direction]: '-100%'
// 			})
// 			]),
// 		group([
// 			query(':leave',[
// 				animate('600ms ease', style({ [direction]: '100%'}))
// 				], optional),
// 			query(':enter', [
// 				animate('600ms ease', style({ [direction]: '0%'}))
// 				])
// 			])
// 		])
// 	];
// }


export const slider =
trigger('routeAnimations', [
  transition('* => alaIzquierda', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%'}))
      ])
    ]),
  ]),
  transition('* => alaDerecha', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%'}))
      ])
    ]),
  ]),
  transition('alaDerecha => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ left: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ left: '0%'}))
      ])
    ]),
  ]),
  transition('alaIzquierda => *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ right: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ right: '100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease', style({ right: '0%'}))
      ])
    ]),
  ])
],
)