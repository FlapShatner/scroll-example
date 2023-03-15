'use client'
import {Slide} from 'react-awesome-reveal'
import s from './scroll.module.css'

export default function Scroll() {

    const para = "I'm John look at me DER DER DER."

  return (
    <div className={s.list}>
        <Slide direction='left'>        
      <div>
        <h2>Here is a paragraph</h2>
        <p className={s.bold}>{para}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, praesentium! A corporis numquam atque pariatur, esse rem iusto distinctio dolore voluptatum aliquam quibusdam laborum repudiandae hic eius nesciunt sit</p>
      </div>
      </Slide>
      <Slide direction='right'>
      <div>
        <h2>Here is another paragraph</h2>        
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae corporis eveniet ratione amet, magnam omnis nobis reprehenderit possimus eos animi commodi eligendi accusantium voluptates voluptatum vel. Fugit voluptatem nesciunt quam</p>
      </div>
      </Slide>
      <Slide>
      <div>
        <h2>Here is more paragraph</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies tincidunt, nunc nisl aliquam nisl, vel aliquet ni</p>
      </div>
      </Slide>
      <Slide direction='right'>
      <div>
        <h2>Here is the last paragraph</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sit adipisci rerum sed eum suscipit vitae dolor totam officia cumque, ipsam, at numquam vero incidunt tenetur alias quidem sequi corporis repellendus et iusto eos dolorum? Nulla nostrum, incidunt illum nisi odio aut aliquam, assumenda reiciendis alias molestiae porro adipisci deserunt.</p>
      </div>
      </Slide>
    </div>
  )
}
