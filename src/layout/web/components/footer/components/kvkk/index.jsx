const KVKK = () => {
  return (
    <div className="text-sm text-center md:text-center">
      <p className="mb-2">
        PsiNous IT Birimi
      </p>
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
      </p>
      <div className="flex justify-center lg:justify-start space-x-4">
        <a href="#" className="hover:text-gray-400">
          Hakkında
        </a>
        <a href="#" className="hover:text-gray-400">
          İletişim
        </a>
        <a href="#" className="hover:text-gray-400">
          Gizlilik Politikası
        </a>
        <a href="#" className="hover:text-gray-400">
          Kullanım Şartları
        </a>
      </div>
    </div>
  );
};

export default KVKK;
