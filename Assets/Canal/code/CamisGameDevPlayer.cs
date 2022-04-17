using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CamisGameDevPlayer : MonoBehaviour
{
	[Header("Configura��es do Dano")]
	public int Damage;
	[Range(3,10)]
	public float MaxDamage;

	[Space(15)]
	[Header("Configura��es da Vida")]
	[Range(10, 20)]
	public int MaxHealth;
	public float Health;

	[Header("Movimenta��o")]
	[Tooltip("Valor da velocidade quando se mover")]
	public float MoveSpeed; 
	public float JumpSpeed;

	[Header("Pontua��o")]
	public Text ScoreText;
	public int Score;
}
