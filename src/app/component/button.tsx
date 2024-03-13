export function Tombol_2({isiPesan, namaTombol} ){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    ); 
}

export default function Tombol_1() {
    function handleClick() {
        alert("Tombol telah ditekan!!");
    }

    function handleMouseOver(){
        alert("Mau tekan tombol yah?");
    }

    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        //onMouseOver={handleMouseOver}
        onMouseLeave={() => alert("kamu yakin?")}
        >
            Ini tombol
        </button>
    );
}