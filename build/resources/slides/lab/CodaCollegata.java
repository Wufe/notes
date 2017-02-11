
public class CodaCollegata implements Coda {

	private Record inizio = null;
	private Record fine = null;
	
	private class Record {
 		public Object elem;
 		public Record next;

		public Record(Object e) {
			elem = e; 
			next = null;
		}
	}
	

	public boolean isEmpty() {
		return inizio == null;
	}

	public void enqueue(Object e) {
		if (isEmpty())
			inizio = fine = new Record(e);
		else {
			fine.next = new Record(e);
			fine = fine.next;
		}
	}


	public Object first() throws EccezioneStrutturaVuota {}

	public void dequeue(){}

}
