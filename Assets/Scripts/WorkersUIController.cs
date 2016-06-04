using UnityEngine;
using System.Collections;

public class WorkersUIController : MonoBehaviour {

	public void changeScene(string Name)
    {
        Application.LoadLevel(Name);
    }
}
