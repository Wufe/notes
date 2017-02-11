
public class StrutturaCollegata implements Dizionario {

	private Record list = null;
	private final class Record {
		public Object 	elem;
		public Comparable chiave;
		public Record   next;
		public Record   prev;	
		public Record(Object e, Comparable k) {
            elem = e;
            chiave = k;
            next = prev = null;
      }
   	}

	/*
	 * Contemplare i seguenti casi:
	 * 1. Il dizionario è vuoto: list == null. Non fare nulla.
	 * 2. La chiave non è presente nel dizionario.  Non fare nulla.
	 * 3. L’elemento cercato è presente ed è l’unico della lista. Poni list a null.
	 * 4. L’elemento cercato è presente ed è il primo della lista. Aggiorna list.
	 * 5. L’elemento cercato è presente ed è successivo al primo. Aggiorna i puntatori del predecessore e del successore.
	 */
	public void delete(Comparable k) throws EccezioneChiaveNonValida,DizionarioVuoto{
		// To implement
	}

	
	@Override
	public void insert(Object e, Comparable k) {
		Record p = new Record(e, k);
        if (list == null)
            list = p.prev = p.next = p;
        else {
            p.next = list.next;
            list.next.prev = p;
            list.next = p;
            p.prev = list;
        }


	}

	@Override
	public Object search(Comparable k) {
		if (list == null) return null;
	      for (Record p = list; ; p = p.next){
	          if (p.chiave.equals(k)) 
	        	  return p.elem;
	          if (p == list.prev) 
	        	  return null;
	      }

	}
	
	private static void inizializza(Dizionario d) {

		d.insert("Pippo","080123456");
		d.insert("Giò", "080654321");
		d.insert("Lisa", "081123456");
		d.insert("Gennarino", "081654321");
		d.insert("Emy", "347112233");
	}
	public static void main(String[] args) {
		Dizionario rubrica = new StrutturaCollegata();
		inizializza(rubrica);
		
System.out.println(rubrica.search("081654321"));
			
		rubrica.delete("081654321");		
		System.out.println(rubrica.search("081654321"));
		
		rubrica.delete("081654321");
				
		rubrica.delete("080123456");
				
		rubrica.delete("081123456");
				
		rubrica.delete("347112233");
				
		rubrica.delete("080654321");
			
	}


}
