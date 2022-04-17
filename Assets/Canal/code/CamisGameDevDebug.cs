using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CamisGameDevDebug : MonoBehaviour
{
	void Start()
	{
		Debug.Log("Passou no Start", gameObject);
		Debug.LogError("Passou no Start", gameObject);
		Debug.LogWarning("Passou no Start", gameObject);
	}

	/*void Start()
	{
		for (int i = 0; i < _count; i++)
		{
			var g = new GameObject();
			g.AddComponent<CamisGameDevDebug>();
		}
	}*/
}
