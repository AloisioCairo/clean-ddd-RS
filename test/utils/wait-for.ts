// Node.js > DDD no Node.js > Subdomínios & DomainEvents > Enviando notificação no subscriber

/**
 * This function loops through a function rerunning all assertions
 * inside of it until it gets a truthy result.
 *
 * If the maximum duration is reached, it then rejects.
 *
 * @param expectations A function containing all tests assertions
 * @param maxDuration Maximum wait time before rejecting
 */
export async function waitFor(
  assertions: () => void,
  maxDuration = 1000,
): Promise<void> {
  return new Promise((resolve, reject) => {
    let elapsedTime = 0

    const interval = setInterval(() => {
      elapsedTime += 10

      try {
        assertions()
        clearInterval(interval)
        resolve()
      } catch (err) {
        if (elapsedTime >= maxDuration) {
          reject(err)
        }
      }
    }, 10)
  })
}