import React, { useState } from 'react'


export default function App() {

    const [escuro, setEscuro] = useState(false)

    const tema = {
        backgroundColor: escuro ? "black" : "white",
        color: escuro ? "white" : "black"
    }

    return (
        <div style={tema}>
           <h1>React - Tema Claro/Escuro</h1>
           <hr />
           <button onClick={() => { setEscuro(old => !old)}}>Tema</button>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore eos aperiam laborum autem fuga quos sed delectus dicta, ex impedit, sunt beatae! Similique, ad commodi nulla asperiores a unde.
           Porro repellendus, omnis modi assumenda sunt minima amet nisi consectetur quidem similique perferendis beatae officia placeat rem eaque, et eum odio perspiciatis ullam? Qui ipsam nulla quia fugiat consectetur ullam.
           Natus exercitationem suscipit, corrupti ducimus consectetur et, illum nihil necessitatibus repellat sunt beatae odit quas. Blanditiis dignissimos in perspiciatis delectus molestias ut consectetur veritatis pariatur nisi eligendi odit, aliquam labore!
           Unde doloribus recusandae tempora quis quod. Ullam totam ipsum inventore consequuntur tempore debitis ipsa maiores aut, cum maxime. Assumenda veniam aliquid magnam aspernatur libero, earum odio dolores explicabo dolore repudiandae?
           Ipsam doloremque vel iusto debitis sit blanditiis expedita quaerat illo molestias numquam dicta aliquid laudantium accusantium recusandae voluptatibus incidunt, libero inventore maxime quis aspernatur in quisquam ab! Sequi, ipsum dolorum.
           Aperiam quas necessitatibus labore repudiandae cum minima, consequatur excepturi explicabo, fuga inventore laborum aspernatur! Quam exercitationem omnis aliquid quidem, ex maxime asperiores consectetur ullam ad reiciendis deleniti quod laborum quia.
           Alias atque blanditiis maxime quidem error doloribus ullam quasi est unde repudiandae. Fugit hic facilis excepturi sed sit? Veritatis cumque, tempora quae voluptatum eos veniam vitae sunt tempore officia perferendis.
           Expedita illo quidem ducimus cum magni reiciendis, natus, quisquam nostrum, dolores aspernatur molestiae assumenda aliquam necessitatibus praesentium rem consequuntur officiis debitis neque doloribus non velit! Quam deserunt ipsa eligendi officiis.
           Sunt velit minus perferendis itaque! Ad vel ut ab quod pariatur provident unde modi, amet fuga aut expedita voluptates, in eaque nobis possimus commodi harum minima dolores, totam beatae explicabo.
           Et laboriosam nihil voluptatem assumenda quibusdam enim commodi facilis officiis repellat labore voluptatum nostrum dolore exercitationem, molestias tenetur? Natus corporis expedita saepe repellat cupiditate quidem exercitationem eius? Officia, ullam quos.</p>
        </div>
    )
}