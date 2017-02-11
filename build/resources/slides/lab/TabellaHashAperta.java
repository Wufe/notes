

public class TabellaHashAperta implements Dizionario {

	// array di coppie (elem,chiave)
	private Coppia[] S;
	private Hash hFun;
	private Scansione cFun;
	
	
	public TabellaHashAperta(int n, Hash hFun, Scansione cFun){
		S=new Coppia[n];
		this.hFun=hFun;
		this.cFun=cFun;
	}
	 // classe Coppia
    private class Coppia {
        public Object elem;
        public Comparable chiave;
        public Coppia(Object e, Comparable k) {
            this.elem = e;
            this.chiave = k;
        }
		 public String toString(){
        	return chiave.toString()+ ":"+elem.toString();
        }
    }
	
	@Override
	public void delete(Comparable k) {
		

	}

	@Override
	public void insert(Object e, Comparable k) {
		int hk=hFun.h(k, S.length);
		for(int i=0;i<S.length;i++){
			int pos=cFun.c(hk, i, S.length);
			if(S[pos]==null){
				S[pos]=new Coppia(e,k);
				return;
			}
			
			
		}
		

	}

	@Override
	public Object search(Comparable k) {
		
		// TO BE IMPLEMENTED
		
		return null;
		
	}
	
	private static void inizializza(Dizionario d) {
		   d.insert("Pippo","080123456");
		   d.insert("Giò", "080654321");
		   d.insert("Lisa", "081123456");
		   d.insert("Gennarino", "081654321");
		   d.insert("Emy", "347112233");
	}
	
	public static void main(String[] args) {
			Dizionario rubrica = new TabellaHashAperta(4, new HashDivisione(), new ScansioneLineare());
			
			inizializza(rubrica);
				
						
			System.out.println(rubrica.search("081654321"));
			System.out.println(rubrica.search("081654323"));
			System.out.println(rubrica.search("081123456"));
	 }

}

