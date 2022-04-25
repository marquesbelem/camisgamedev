using System;
using UnityEngine;

//The Biribinha Memory Game
namespace BiribinhaMemoryGame
{
	[CreateAssetMenu(fileName = "Card", menuName = "Biribinha Memory Game/CardData")]
	public class CardData : ScriptableObject
	{
		public Sprite Sprite;
	}
}