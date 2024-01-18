// validasi hanya angka pada inputan
function hanyaAngka(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  }
  
  // function hitung luas start
  function luas() {
    let nilaiLuas = document.getElementById("nilai-luas").value;
  
    if (!nilaiLuas) {
      alert("Inputkan Sisi Terlebih Dahulu");
    } else {
      let hasil = nilaiLuas * nilaiLuas;
      document.getElementById("result-luas").innerHTML =
        "<p>L = S x S</p> <p>L = " +
        nilaiLuas +
        " x " +
        nilaiLuas +
        " </p> <p>L = " +
        hasil +
        "</p>";
    }
  }
  
  function resetLuas() {
    document.getElementById("nilai-luas").value = "";
    document.getElementById("result-luas").innerHTML = "";
  }
  // function hitung luas end
  
  // function hitung keliling start
  function keliling() {
    let nilaiKeliling = document.getElementById("nilai-keliling").value;
  
    if (!nilaiKeliling) {
      alert("Inputkan Sisi Terlebih Dahulu");
    } else {
      let hasil = 4 * nilaiKeliling;
      document.getElementById("result-keliling").innerHTML =
        "<p>K = 4 x S</p> <p>K = 4 x " +
        nilaiKeliling +
        " </p> <p>K = " +
        hasil +
        "</p>";
    }
  }
  
  function resetkeliling() {
    document.getElementById("nilai-keliling").value = "";
    document.getElementById("result-keliling").innerHTML = "";
  }
  // function hitung keliling end
  
  // function hitung luas Persegi Panjang start
  function luasPpanjang() {
    let lebar = document.getElementById("nilai-lebar").value;
    let panjang = document.getElementById("nilai-panjang").value;
  
    if (!lebar && !panjang) {
      alert("Inputkan Lebar & Panjang Terlebih Dahulu");
    } else {
      let hasil = lebar * panjang;
      document.getElementById("result-luas-persegiPanjang").innerHTML =
        "<p>LPP = P x L</p> LPP = " +
        panjang +
        " x " +
        lebar +
        " </p> <p>LPP = " +
        hasil +
        "</p>";
    }
  }
  
  function resetLuasPpanjang() {
    document.getElementById("nilai-panjang").value = "";
    document.getElementById("nilai-lebar").value = "";
    document.getElementById("result-luas-persegiPanjang").innerHTML = "";
  }
  // function hitung luas Persegi Panjang end
  
  // function hitung keliling Persegi Panjang start
  function kelilingPpanjang() {
    let PanjangKeliling = document.getElementById("k-nilai-panjang").value;
    let LebarKeliling = document.getElementById("k-nilai-lebar").value;
  
    if (!PanjangKeliling && !LebarKeliling) {
      alert("Inputkan Lebar & Panjang Terlebih Dahulu");
    } else {
      let resKeliling = 2 * PanjangKeliling + 2 * LebarKeliling;
      document.getElementById("result-keliling-pPanjang").innerHTML =
        "<p>K = (2 x P ) + (2 x L)</p> <p>K = (2 x " +
        PanjangKeliling +
        ") + (2 x " +
        LebarKeliling +
        ") </p> <p>K = " +
        resKeliling +
        "</p>";
    }
  }
  
  function resetkelilingPpanjang() {
    document.getElementById("k-nilai-panjang").value = "";
    document.getElementById("k-nilai-lebar").value = "";
    document.getElementById("result-keliling-pPanjang").innerHTML = "";
  }
  // function hitung keliling Persegi Panjang end
  
  // Hide persegi start
  function hidePersegi() {
    document.getElementById("katik-persegi").style.display = "none";
    document.getElementById("hiden").style.display = "flex";
    document.getElementById("hiden").style.flexDirection = "column";
    document.getElementById("persegi").style.color = "#3498db";
    document.getElementById("persegi").style.backgroundColor = "white";
    document.getElementById("p-panjang").style.color = "white";
    document.getElementById("p-panjang").style.backgroundColor = "#3498db";
  }
  // Hide persegi end
  
  // Hide persegi panjang start
  function hidePersegiPanjang() {
    document.getElementById("hiden").style.display = "none";
    document.getElementById("katik-persegi").style.display = "flex";
    document.getElementById("katik-persegi").style.flexDirection = "column";
    document.getElementById("persegi").style.color = "white";
    document.getElementById("persegi").style.backgroundColor = "#3498db";
    document.getElementById("p-panjang").style.color = "#3498db";
    document.getElementById("p-panjang").style.backgroundColor = "white";
  }
  // Hide persegi panjang end
  