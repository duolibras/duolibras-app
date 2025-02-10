"use client"

import { createContext, useContext } from 'react'
import { createJourneyController } from '../journey-controller'
import { JourneyService } from '../journey-service'

interface JourneyContextData {
  useMyJourney: ReturnType<typeof createJourneyController>['useMyJourney']
}

const JourneyContext = createContext({} as JourneyContextData)

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const journeyService = new JourneyService()
  const controller = createJourneyController(journeyService)

  return (
    <JourneyContext.Provider value={controller}>
      {children}
    </JourneyContext.Provider>
  )
}

export function useJourney() {
  const context = useContext(JourneyContext)
  if (!context) {
    throw new Error('useJourney must be used within a JourneyProvider')
  }
  return context
}
