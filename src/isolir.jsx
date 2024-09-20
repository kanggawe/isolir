import logo from "./img/solir.png";

function isolir() {
  return (
    <>
      <div className="container pb-2 pt-4 ">
        <div className="rounded-3">
          <div className="container-fluid">
            <img src={logo} className="img-fluid mx-auto d-block" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-sm-8 col-xs-12">
            <div className="h-10 p-4 text-white bg-secondari rounded-3 border border-primary">
              <h4 className="texthd mb-5">PELANGGAN YANG TERHORMAT</h4>
              <p className="textp">
                Kami Informasikan bahwa layanan internet Anda saat ini ter
                isolir secara otomatis oleh system billing kami.
              </p>
              <p className="textp">
                Mohon maaf atas ketidak-nyamanan nya, Agar dapat digunakan
                kembali mohon melakukan pembayaran.
              </p>
              <p className="textp">
                {" "}
                dimohon untuk melakukan pembayaran tepat waktu di tiap bulan
                nya, Silahkan hubungi admin layanan kami mengenai hal ini
              </p>

              <p className="texthd">~Terimakasih~</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default isolir;
