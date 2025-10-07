import React from 'react'
import ProfileCard from './components/ProfileCard'

const App = () => {
  return (
    <div className=' bg-zinc-900  w-full min-h-screen gap-2 flex-wrap flex items-center justify-center '>
    <ProfileCard
    name = "hadid vai"
    image ="https://scontent.fdac142-1.fna.fbcdn.net/v/t39.30808-6/558507848_1156121219953272_4896645063249191027_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RkoPVowQcVcQ7kNvwHntaeu&_nc_oc=AdmZel6rygNM8qClKlw5ihbXrGAph9w5EYA2YdcaZ1QD8anf5wg-tkqCh5T2PqhR4cA&_nc_zt=23&_nc_ht=scontent.fdac142-1.fna&_nc_gid=3DNGz_IxcjKtTKUWcNrxsA&oh=00_AfdUsCnYkU-aYAXTJEnlHQ0MbLswiLP70r_CWrV2_Ol_2w&oe=68EB0036"
    description = "England Cricketer"
    />
    <ProfileCard
    name = "Shek forid rifat"
    image ="https://scontent.fdac142-1.fna.fbcdn.net/v/t39.30808-1/559177275_122155207886759068_7599690462088050586_n.jpg?stp=c83.56.882.882a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=otzKVGDc45gQ7kNvwHE63QC&_nc_oc=Adlx9SH7KrOcHVPikZFRsvyKC0EkAFRRxH84wFqaLT9qk3wwQEEGEG9TGeRL3YFUxo0&_nc_zt=24&_nc_ht=scontent.fdac142-1.fna&_nc_gid=_FbVHLzqFWDuIHHEk0PpPg&oh=00_AfeAHe5V4Uy0y_Y1EBhsVsPZaBaJHcidmMqKOR76Zb4ebQ&oe=68EB1242"
    description = "Mern developer (learner)"
    />
    
    </div>
  )
}

export default App