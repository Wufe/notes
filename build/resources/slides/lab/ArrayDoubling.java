public class ArrayDoubling implements Dizionario {

	// array di coppie (elem,chiave)
	private Coppia[] S= new Coppia[1];
	private int n = 0;
	
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


	/*
	 * Sia i la posizione dell’elemento di S con chiave k, 
	 * tale elemento può essere sovrascritto con l’elemento di S in posizione (n-1), 
	 * decrementando poi n di uno ed eventualmente  (se n<S.length/4) dimezzando l’array.
	 * Sollevare la eccezione EccezioneChiaveNonValida se la chiave k non appartien ad S
	 */
	public void delete(Comparable k){
		// TO be implemented
		

	}

	/*
	 * Previo eventuale raddoppiamento dell’array, 
	 * ogni nuovo elemento viene inserito nella cella di indice n, 
	 * e poi si incrementa n di uno.
	 */
	public void insert(Object e, Comparable k) {
		if (n == S.length) {
			//raddoppiare dimensione di S
			Coppia[] temp = new Coppia[2 * S.length];
			for (int i = 0; i < n; i++) temp[i] = S[i];
			S = temp;
		}
		//mettere in coda la nuova coppia
		S[n] = new Coppia(e, k);
		n++;

	}

	@Override
	public Object search(Comparable k) {
		int i=0;
		for(i=0;i<n;i++)
			if(k.compareTo(S[i].chiave)==0)
				return S[i].elem;
		return null;
	}

	
	private static void inizializza(Dizionario d) {
		   d.insert("Pippo","080123456");
		   d.insert("Giò", "080654321");
		   d.insert("Lisa", "081123456");
		   d.insert("Gennarino", "08166321");
		   d.insert("Emy", "347112233");
	}
	
	public static void main(String[] args) {
		Dizionario rubrica = new ArrayDoubling();
		inizializza(rubrica);
		System.out.println(rubrica.search("081654321"));
		rubrica.delete("081654321");
		System.out.println(rubrica.search("081654321"));
		rubrica.delete("081654321");
			
	 }

}
