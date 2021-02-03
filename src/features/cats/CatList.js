export default function CatList({ catPics }) {
    const catPicsImg = catPics.map(pic => {
        return <img key={pic.url} src={pic.url} alt="cat" />
    })
    
    return (
        <div>
            {catPicsImg}
        </div>
    )
}