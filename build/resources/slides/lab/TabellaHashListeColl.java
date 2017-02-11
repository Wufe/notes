
public class TabellaHashListeColl implements Dizionario {

	StrutturaCollegata S[];
	Hash fHash;
	
	TabellaHashListeColl(Hash f, int n){
		fHash=f;
		S= new StrutturaCollegata[n];
	}

	public void delete(Comparable k) {
		int pos=fHash.h(k, S.length);
		if(S[pos]==null)
			return;
		S[pos].delete(k);

	}

	public void insert(Object e, Comparable k) {
		int pos=fHash.h(k, S.length);
		if  (S[pos]==null)
			S[pos]=new StrutturaCollegata();
		S[pos].insert(e, k);
	}

	public Object search(Comparable k) {
		//To be implemented
	}
	

	
private static void inizializza(Dizionario d) {
	   d.insert("Pippo","080123456");
	   d.insert("Giò", "080654321");
	   d.insert("Lisa", "081123456");
	   d.insert("Gennarino", "081654321");
	   d.insert("Emy", "347112233");
	 }
public static void main(String[] args) {
		Dizionario rubrica = new TabellaHashListeColl(new HashDivisione(), 3);
		inizializza(rubrica);
		System.out.println(rubrica.search("080123456"));
		System.out.println(rubrica.search("081654321"));
		System.out.println(rubrica.search("081123456"));
		System.out.println(rubrica.search("081654321"));
		System.out.println(rubrica.search("347112233"));
		System.out.println(rubrica.search("347122233"));
			
	}
}
