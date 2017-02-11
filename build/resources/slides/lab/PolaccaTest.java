
public class PolaccaTest {

	private static void stampaRisultato(String espressione) {
		int risultato = 0;
		try {
			risultato = Polacca.valuta(espressione);
		} catch (EccezioneEspressioneNonValida e) {
			System.out.println(e.toString());
			return;
		}
		System.out.println(risultato);
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		String espressione = "123  245 + 127 - 2 * 1 /";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
		System.out.println("");
		espressione = "35 17 40 9 - * + 7 -";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
		System.out.println("");
		espressione = "2 2 +";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
		System.out.println("");
		espressione = "2 +";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
		System.out.println("");
		espressione = "2 2 2 +";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
		System.out.println("");
		espressione = "asd asd +";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
		System.out.println("");
		espressione = "4 4";
		System.out.println("Valuto l'espressione: " + espressione);
		stampaRisultato(espressione);
	}

}
