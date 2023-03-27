type World = 'world'

type Greeting = `Hello ${World}`

type VerticalAlignment = 'top' | 'middle' | 'bottom';
type HorizontalAlignment = 'left' | 'center' | 'right';

type Alignment = `${VerticalAlignment}-${HorizontalAlignment}`

declare function setAlignment(value: Alignment)： void；
setAlignment('top-left')
setAlignment('top-middle')